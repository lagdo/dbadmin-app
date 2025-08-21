ARG ALPINE_VERSION=3.22
ARG PHP_VERSION=8.4
ARG UNIT_VERSION=1.34.2

# Nginx Unit downloader
FROM alpine:${ALPINE_VERSION} AS nginx-unit-downloader

ARG UNIT_VERSION
WORKDIR "/tmp/unit"
ADD ["https://codeload.github.com/nginx/unit/tar.gz/refs/tags/${UNIT_VERSION}", "/tmp/unit.tar.gz"]
RUN tar zxvf /tmp/unit.tar.gz --strip=1 -C "/tmp/unit"

# Nginx Unit builder
ARG PHP_VERSION
ARG ALPINE_VERSION
FROM php:${PHP_VERSION}-zts-alpine${ALPINE_VERSION} AS nginx-unit-builder

COPY --from=nginx-unit-downloader ["/tmp/unit", "/build/unit/"]
ENV DESTDIR=/opt/unit/
WORKDIR "/build/unit/"
ARG PHP_VERSION

RUN set -eux && \
  apk add --update --no-cache alpine-sdk curl pcre openssl-dev pcre-dev && \
  ./configure --log=/var/log/unitd.log && \
  ./configure php --module="php" && \
  make -j "$(nproc)" && \
  make -j "$(nproc)" install && \
  make clean

# Composer installer
FROM composer AS composer-builder
COPY . /app
WORKDIR /app/
RUN composer install && \
#  composer run post-root-package-install && \
  cp .env.docker .env && \
  composer run post-create-project-cmd

# Root builder
FROM alpine:${ALPINE_VERSION}
FROM php:${PHP_VERSION}-zts-alpine${ALPINE_VERSION}

ARG PHP_USER
ARG PHP_UID
ARG PHP_GID
ENV PHP_USER=${PHP_USER}
ENV PHP_UID=${PHP_UID}
ENV PHP_GID=${PHP_GID}

RUN set -xe && apk add --no-cache --virtual .build-deps pcre

RUN --mount=type=bind,from=mlocati/php-extension-installer:2,source=/usr/bin/install-php-extensions,target=/usr/local/bin/install-php-extensions \
  install-php-extensions zip tokenizer bcmath ctype curl dom fileinfo mbstring openssl \
  pdo pdo_sqlite sqlite3 pdo_mysql mysqlnd mysqli pdo_pgsql pgsql

# Nginx Unit
COPY --from=nginx-unit-builder ["/opt/unit/", "/opt/unit/"]
RUN cp -R /opt/unit/usr/local/* /usr/local

COPY . /var/www

# Configure Nginx Unit
COPY docker/config/unit.json /docker-entrypoint.d/config.json
COPY docker/entrypoint.sh /usr/local/bin/docker-entrypoint.sh

ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]

RUN chmod +x /usr/local/bin/docker-entrypoint.sh && \
  addgroup -g ${PHP_GID} --system ${PHP_USER} && \
  adduser -G ${PHP_USER} --system -D -s /bin/sh -u ${PHP_UID} ${PHP_USER} && \
  # Create project dirs
  mkdir -p /var/cache/jaxon && \
  # Make sure files/folders needed by the processes are accessible
  chown -R ${PHP_USER}:${PHP_USER} /var/www /var/run /run /var/cache/jaxon

COPY --from=composer-builder --chown=${PHP_USER} ["/app/.env", "/var/www/.env"]
COPY --from=composer-builder --chown=${PHP_USER} ["/app/database/database.sqlite", "/var/www/database/"]
COPY --from=composer-builder --chown=${PHP_USER} ["/app/vendor/", "/var/www/vendor/"]

WORKDIR /var/www
EXPOSE 8080

CMD [ "unitd", "--no-daemon", "--control", "unix:/var/run/control.unit.sock" ]
