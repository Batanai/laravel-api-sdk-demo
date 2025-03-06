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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TodosApi;


TodosApi apiInstance = new TodosApi();
Integer id = 56; // Integer | 
try {
    apiInstance.deleteTodo(id);
} catch (ApiException e) {
    System.err.println("Exception when calling TodosApi#deleteTodo");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TodosApi;


TodosApi apiInstance = new TodosApi();
Integer id = 56; // Integer | 
try {
    Todo result = apiInstance.getTodoById(id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TodosApi#getTodoById");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  |

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTodosList"></a>
# **getTodosList**
> List&lt;Todo&gt; getTodosList()

Get list of todos

Returns a list of todos

### Example
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TodosApi;


TodosApi apiInstance = new TodosApi();
try {
    List<Todo> result = apiInstance.getTodosList();
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TodosApi#getTodosList");
    e.printStackTrace();
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List&lt;Todo&gt;**](Todo.md)

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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TodosApi;


TodosApi apiInstance = new TodosApi();
ApiTodosBody body = new ApiTodosBody(); // ApiTodosBody | 
try {
    Todo result = apiInstance.storeTodo(body);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TodosApi#storeTodo");
    e.printStackTrace();
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
```java
// Import classes:
//import io.swagger.client.ApiException;
//import io.swagger.client.api.TodosApi;


TodosApi apiInstance = new TodosApi();
TodosIdBody body = new TodosIdBody(); // TodosIdBody | 
Integer id = 56; // Integer | 
try {
    Todo result = apiInstance.updateTodo(body, id);
    System.out.println(result);
} catch (ApiException e) {
    System.err.println("Exception when calling TodosApi#updateTodo");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodosIdBody**](TodosIdBody.md)|  |
 **id** | **Integer**|  |

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

