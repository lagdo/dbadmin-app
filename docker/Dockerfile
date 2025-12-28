ARG DBADMIN_VERSION=0.4.1

# Root builder
FROM lagdo/alpine-php-nginx-unit

ARG DBADMIN_VERSION
ARG PHP_USER
ARG PHP_UID
ARG PHP_GID
ENV PHP_USER=${PHP_USER}
ENV PHP_UID=${PHP_UID}
ENV PHP_GID=${PHP_GID}

RUN install-php-extensions pdo pdo_sqlite sqlite3 pdo_mysql mysqlnd mysqli pdo_pgsql pgsql

# Configure Nginx Unit
COPY docker/config/unit.json /docker-entrypoint.d/config.json

# App root
COPY . /var/www

RUN addgroup -g ${PHP_GID} --system ${PHP_USER} && \
  adduser -G ${PHP_USER} --system -D -s /bin/sh -u ${PHP_UID} ${PHP_USER} && \
  mkdir -p /var/cache/jaxon && \
  chown -R ${PHP_USER}:${PHP_USER} /var/www /var/run /run /var/cache/jaxon

# Install Composer packages
RUN cd /var/www && \
  su ${PHP_USER} -c 'composer install --no-dev' && \
  su ${PHP_USER} -c 'cp .env.docker .env' && \
  su ${PHP_USER} -c 'composer run post-create-project-cmd'

WORKDIR /var/www
EXPOSE 8080

LABEL maintainer="Thierry Feuzeu <thierry.feuzeu@gmail.com>" \
  org.opencontainers.image.source="https://github.com/lagdo/dbadmin-app" \
  org.opencontainers.image.description="Jaxon DbAdmin: a web-based database management tool." \
  org.opencontainers.image.licenses="BSD 3-Clause" \
  org.opencontainers.image.version="${DBADMIN_VERSION}"
