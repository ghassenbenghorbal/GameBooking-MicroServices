FROM php:8.1-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo pdo_mysql
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli

WORKDIR /app
COPY . /app

RUN composer install
RUN php artisan optimize
# RUN php artisan migrate:fresh --seed

CMD php artisan serve --host=0.0.0.0 --port=8081
EXPOSE 8081