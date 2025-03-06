# io.swagger.client - Kotlin client library for Todo API

## Requires

* Kotlin 1.4.30
* Gradle 5.3

## Build

First, create the gradle wrapper script:

```
gradle wrapper
```

Then, run:

```
./gradlew check assemble
```

This runs all tests and packages the library.

## Features/Implementation Notes

* Supports JSON inputs/outputs, File inputs, and Form inputs.
* Supports collection formats for query parameters: csv, tsv, ssv, pipes.
* Some Kotlin and Java types are fully qualified to avoid conflicts with types defined in Swagger definitions.
* Implementation of ApiClient is intended to reduce method counts, specifically to benefit Android targets.

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*TodosApi* | [**deleteTodo**](docs/TodosApi.md#deletetodo) | **DELETE** /api/todos/{id} | Delete a todo
*TodosApi* | [**getTodoById**](docs/TodosApi.md#gettodobyid) | **GET** /api/todos/{id} | Get a specific todo
*TodosApi* | [**getTodosList**](docs/TodosApi.md#gettodoslist) | **GET** /api/todos | Get list of todos
*TodosApi* | [**storeTodo**](docs/TodosApi.md#storetodo) | **POST** /api/todos | Create a new todo
*TodosApi* | [**updateTodo**](docs/TodosApi.md#updatetodo) | **PUT** /api/todos/{id} | Update a todo

<a name="documentation-for-models"></a>
## Documentation for Models

 - [io.swagger.client.models.ApiTodosBody](docs/ApiTodosBody.md)
 - [io.swagger.client.models.Todo](docs/Todo.md)
 - [io.swagger.client.models.TodosIdBody](docs/TodosIdBody.md)

<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
