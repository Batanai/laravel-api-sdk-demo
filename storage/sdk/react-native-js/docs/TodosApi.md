# TodoApi.TodosApi

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
```javascript
import {TodoApi} from 'todo_api';

let apiInstance = new TodoApi.TodosApi();
let id = 56; // Number | 

apiInstance.deleteTodo(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

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
```javascript
import {TodoApi} from 'todo_api';

let apiInstance = new TodoApi.TodosApi();
let id = 56; // Number | 

apiInstance.getTodoById(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Number**|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTodosList"></a>
# **getTodosList**
> [Todo] getTodosList()

Get list of todos

Returns a list of todos

### Example
```javascript
import {TodoApi} from 'todo_api';

let apiInstance = new TodoApi.TodosApi();
apiInstance.getTodosList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Todo]**](Todo.md)

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
```javascript
import {TodoApi} from 'todo_api';

let apiInstance = new TodoApi.TodosApi();
let body = new TodoApi.ApiTodosBody(); // ApiTodosBody | 

apiInstance.storeTodo(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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
```javascript
import {TodoApi} from 'todo_api';

let apiInstance = new TodoApi.TodosApi();
let body = new TodoApi.TodosIdBody(); // TodosIdBody | 
let id = 56; // Number | 

apiInstance.updateTodo(body, id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodosIdBody**](TodosIdBody.md)|  | 
 **id** | **Number**|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

