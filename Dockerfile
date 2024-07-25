ARG registry=docker.io
FROM ${registry}/library/php:8.1-apache

# Configuration de apache
COPY .docker/apache-vhost.conf /etc/apache2/sites-available/000-default.conf
COPY .docker/apache-security.conf /etc/apache2/conf-enabled/security.conf
COPY .docker/apache-ports.conf /etc/apache2/ports.conf

RUN a2enmod rewrite remoteip alias headers

COPY --chown=www-data:www-data ./docs /opt/chatbot/
WORKDIR /opt/chatbot

EXPOSE 8080