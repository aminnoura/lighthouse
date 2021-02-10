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

### `php artisan migrate`

Create database user table 

### `php artisan make:model -m Post`

Defining models and migrations sample. This will create a model call post inside app/Models/ folder

### `php artisan vendor:publish --tag=lighthouse-config` 

Lighthouse comes with sensible configuration defaults and works right out of the box. Should you feel the need to change your configuration, you need to publish the configuration file first.

### `php artisan lighthouse:query Hello`

The easiest way to create such a class is to use the built in artisan commands lighthouse:query and lighthouse:mutation. They both take a single argument: the name of the field you want to generate.
This is how you generate a class for the field hello.




# Some Important notes: 

## Scalar types
Define your own scalar types by running `php artisan lighthouse:scalar <Scalar name>` and including it in your schema.

[read more](https://github.com/user/repo/blob/branch/other_file.md)

## A tutorial 
[Link] (https://www.positronx.io/laravel-jwt-authentication-tutorial-user-login-signup-api/)
