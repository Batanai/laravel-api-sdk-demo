# TodosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteTodo**](TodosApi.md#deleteTodo) | **DELETE** /api/todos/{id} | Delete a todo
[**getTodoById**](TodosApi.md#getTodoById) | **GET** /api/todos/{id} | Get a specific todo
[**getTodosList**](TodosApi.md#getTodosList) | **GET** /api/todos | Get list of todos
[**storeTodo**](TodosApi.md#storeTodo) | **POST** /api/todos | Create a new todo
[**updateTodo**](TodosApi.md#updateTodo) | **PUT** /api/todos/{id} | Update a todo

<a name="deleteTodo"></a>
# **deleteTodo**
> deleteTodo(id)

Delete a todo

Deletes a specific todo

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = TodosApi()
val id : kotlin.Int = 56 // kotlin.Int | 
try {
    apiInstance.deleteTodo(id)
} catch (e: ClientException) {
    println("4xx response calling TodosApi#deleteTodo")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodosApi#deleteTodo")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.Int**|  |

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getTodoById"></a>
# **getTodoById**
> Todo getTodoById(id)

Get a specific todo

Returns a single todo

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = TodosApi()
val id : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : Todo = apiInstance.getTodoById(id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodosApi#getTodoById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodosApi#getTodoById")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **kotlin.Int**|  |

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTodosList"></a>
# **getTodosList**
> kotlin.Array&lt;Todo&gt; getTodosList()

Get list of todos

Returns a list of todos

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = TodosApi()
try {
    val result : kotlin.Array<Todo> = apiInstance.getTodosList()
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodosApi#getTodosList")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodosApi#getTodosList")
    e.printStackTrace()
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**kotlin.Array&lt;Todo&gt;**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="storeTodo"></a>
# **storeTodo**
> Todo storeTodo(body)

Create a new todo

Stores a new todo in the database

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = TodosApi()
val body : ApiTodosBody =  // ApiTodosBody | 
try {
    val result : Todo = apiInstance.storeTodo(body)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodosApi#storeTodo")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodosApi#storeTodo")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ApiTodosBody**](ApiTodosBody.md)|  |

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTodo"></a>
# **updateTodo**
> Todo updateTodo(body, id)

Update a todo

Updates an existing todo

### Example
```kotlin
// Import classes:
//import io.swagger.client.infrastructure.*
//import io.swagger.client.models.*;

val apiInstance = TodosApi()
val body : TodosIdBody =  // TodosIdBody | 
val id : kotlin.Int = 56 // kotlin.Int | 
try {
    val result : Todo = apiInstance.updateTodo(body, id)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling TodosApi#updateTodo")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling TodosApi#updateTodo")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodosIdBody**](TodosIdBody.md)|  |
 **id** | **kotlin.Int**|  |

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

