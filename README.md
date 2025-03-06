<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

-   [Simple, fast routing engine](https://laravel.com/docs/routing).
-   [Powerful dependency injection container](https://laravel.com/docs/container).
-   Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
-   Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
-   Database agnostic [schema migrations](https://laravel.com/docs/migrations).
-   [Robust background job processing](https://laravel.com/docs/queues).
-   [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

You may also try the [Laravel Bootcamp](https://bootcamp.laravel.com), where you will be guided through building a modern Laravel application from scratch.

If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Laravel Sponsors

We would like to extend our thanks to the following sponsors for funding Laravel development. If you are interested in becoming a sponsor, please visit the [Laravel Partners program](https://partners.laravel.com).

### Premium Partners

-   **[Vehikl](https://vehikl.com/)**
-   **[Tighten Co.](https://tighten.co)**
-   **[WebReinvent](https://webreinvent.com/)**
-   **[Kirschbaum Development Group](https://kirschbaumdevelopment.com)**
-   **[64 Robots](https://64robots.com)**
-   **[Curotec](https://www.curotec.com/services/technologies/laravel/)**
-   **[Cyber-Duck](https://cyber-duck.co.uk)**
-   **[DevSquad](https://devsquad.com/hire-laravel-developers)**
-   **[Jump24](https://jump24.co.uk)**
-   **[Redberry](https://redberry.international/laravel/)**
-   **[Active Logic](https://activelogic.com)**
-   **[byte5](https://byte5.de)**
-   **[OP.GG](https://op.gg)**

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

## INSTRUCTIONS TO RUN THE API AND CREATE THE SDKS

This section of the readMe serves to show how to run the laravel api, implement swagger and create the SDKs

## API

composer create-project laravel/laravel todo-api
cd todo-api

Insert into .env for local DB setup
DB_CONNECTION=sqlite (use which ever DB engine you are using)
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=/Users/macbook/Documents/laravel-php/todo-api/database/database.sqlite (directory of your project. point to the database)
DB_USERNAME=root
DB_PASSWORD=

create models
php artisan make:model Todo -m
php artisan migrate

create controllers
php artisan make:controller TodoController --api

Seed class
php artisan make:seeder TodoSeeder
update DB
php artisan db:seed --class=TodoSeeder
Or seed and re-run migrations
php artisan migrate:fresh --seed
interact with models
php artisan tinker

Test on Postman after running
php artisan serve
POST http://127.0.0.1:8000/api/todos

Running a new migration
php artisan make:migration create_todos_table --create=todos

Forcing a migration
php artisan migrate:reset
php artisan migrate --force
php artisan migrate:fresh

checking laravel logs if migrations have errors
tail -f storage/logs/laravel.log

Use whatever tool to access the local host database

Create routes
ls routes/
There must be api.php or create it manual
touch /routes/api.php
See api.php
create /app/Providers/RouteServiceProvider.php and see file
register Routing file in config/app.php in providers
App\Providers\RouteServiceProvider::class,

see list of routes to see that routing is working
php artisan route:list --path=api

Refresh and run server
php artisan config:clear
php artisan cache:clear
php artisan config:cache
php artisan serve

## SWAGGER

install
composer require darkaonline/l5-swagger

publish
php artisan vendor:publish --provider "L5Swagger\L5SwaggerServiceProvider"

add to .env
L5_SWAGGER_GENERATE_ALWAYS=true
L5_SWAGGER_API_TITLE="Your API Title"
L5_SWAGGER_API_VERSION="1.0.0"
L5_SWAGGER_SECURITY_DEFINITIONS_ENABLED=true

See TodosController on how to add swagger to endpoints and Models/Todos to document models

Refresh server and restart and go to http://localhost:8000/api/documentation#/Todos

Generate json file with all the endpoints
php artisan l5-swagger:generate
should be in storage/api-docs

## SDK

Install latest Swagger Codegen CLI:
wget https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.47/swagger-codegen-cli-3.0.47.jar -O swagger-codegen-cli.jar
or
curl -L https://repo1.maven.org/maven2/io/swagger/codegen/v3/swagger-codegen-cli/3.0.47/swagger-codegen-cli-3.0.47.jar -o swagger-codegen-cli.jar

check for this file
ls -lah swagger-codegen-cli.jar
move this file for a system wide installation
sudo mv swagger-codegen-cli.jar /usr/local/bin/swagger-codegen-cli.jar

Generate SDKs

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l typescript-fetch \
 -o storage/sdk/react-native

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l javascript \
 -o storage/sdk/react-native-js

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l java \
 -o storage/sdk/java-android

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l csharp \
 -o storage/sdk/maui

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l swift5 \
 -o storage/sdk/swift

java -jar /usr/local/bin/swagger-codegen-cli.jar generate \
 -i storage/api-docs/api-docs.json \
 -l kotlin-client \
 -o storage/sdk/kotlin-android
