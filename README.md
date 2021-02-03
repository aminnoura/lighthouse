# Using GraphQL on top of Laravel with Light house

## How to build graphql on top of laravel

### `composer create-project laravel/laravel example-app`

build the laravel app with composer

### `cd example-app`

Change folder

### `composer require nuwave/lighthouse`

Install light house

### `php artisan vendor:publish --tag=lighthouse-schema`

Publish the default schema

### `php artisan lighthouse:ide-helper`

IDE Support

### `composer require mll-lab/laravel-graphql-playground`

Install GraphQL DevTools

### `php artisan serve`

Run the server