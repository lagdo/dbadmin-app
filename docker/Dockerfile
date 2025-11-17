ARG DBADMIN_VERSION=0.2.3

# Composer installer
FROM jitesoft/composer AS composer-builder
COPY . /app
WORKDIR /app/
RUN composer install --no-dev && \
  cp .env.docker .env && \
  composer run post-create-project-cmd

# Root builder
FROM lagdo/alpine-php-nginx-unit

ARG DBADMIN_VERSION
ARG PHP_USER
ARG PHP_UID
ARG PHP_GID
ENV PHP_USER=${PHP_USER}
ENV PHP_UID=${PHP_UID}
ENV PHP_GID=${PHP_GID}

RUN --mount=type=bind,from=mlocati/php-extension-installer:2,source=/usr/bin/install-php-extensions,target=/usr/local/bin/install-php-extensions \
  install-php-extensions pdo pdo_sqlite sqlite3 pdo_mysql mysqlnd mysqli pdo_pgsql pgsql

# Configure Nginx Unit
COPY docker/config/unit.json /docker-entrypoint.d/config.json

# App root
COPY . /var/www

RUN addgroup -g ${PHP_GID} --system ${PHP_USER} && \
  adduser -G ${PHP_USER} --system -D -s /bin/sh -u ${PHP_UID} ${PHP_USER} && \
  mkdir -p /var/cache/jaxon && \
  chown -R ${PHP_USER}:${PHP_USER} /var/www /var/run /run /var/cache/jaxon

COPY --from=composer-builder --chown=${PHP_USER} ["/app/.env", "/var/www/.env"]
COPY --from=composer-builder --chown=${PHP_USER} ["/app/database/database.sqlite", "/var/www/database/"]
COPY --from=composer-builder --chown=${PHP_USER} ["/app/vendor/", "/var/www/vendor/"]

WORKDIR /var/www
EXPOSE 8080

LABEL maintainer="Thierry Feuzeu <thierry.feuzeu@gmail.com>" \
  org.opencontainers.image.source="https://github.com/lagdo/dbadmin-app" \
  org.opencontainers.image.description="Jaxon DbAdmin: a web-based database management tool." \
  org.opencontainers.image.licenses="BSD 3-Clause" \
  org.opencontainers.image.version="${DBADMIN_VERSION}"
