# IO.Swagger.Api.TodosApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteTodo**](TodosApi.md#deletetodo) | **DELETE** /api/todos/{id} | Delete a todo
[**GetTodoById**](TodosApi.md#gettodobyid) | **GET** /api/todos/{id} | Get a specific todo
[**GetTodosList**](TodosApi.md#gettodoslist) | **GET** /api/todos | Get list of todos
[**StoreTodo**](TodosApi.md#storetodo) | **POST** /api/todos | Create a new todo
[**UpdateTodo**](TodosApi.md#updatetodo) | **PUT** /api/todos/{id} | Update a todo

<a name="deletetodo"></a>
# **DeleteTodo**
> void DeleteTodo (int? id)

Delete a todo

Deletes a specific todo

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class DeleteTodoExample
    {
        public void main()
        {
            var apiInstance = new TodosApi();
            var id = 56;  // int? | 

            try
            {
                // Delete a todo
                apiInstance.DeleteTodo(id);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TodosApi.DeleteTodo: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="gettodobyid"></a>
# **GetTodoById**
> Todo GetTodoById (int? id)

Get a specific todo

Returns a single todo

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetTodoByIdExample
    {
        public void main()
        {
            var apiInstance = new TodosApi();
            var id = 56;  // int? | 

            try
            {
                // Get a specific todo
                Todo result = apiInstance.GetTodoById(id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TodosApi.GetTodoById: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int?**|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="gettodoslist"></a>
# **GetTodosList**
> List<Todo> GetTodosList ()

Get list of todos

Returns a list of todos

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class GetTodosListExample
    {
        public void main()
        {
            var apiInstance = new TodosApi();

            try
            {
                // Get list of todos
                List&lt;Todo&gt; result = apiInstance.GetTodosList();
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TodosApi.GetTodosList: " + e.Message );
            }
        }
    }
}
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**List<Todo>**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="storetodo"></a>
# **StoreTodo**
> Todo StoreTodo (ApiTodosBody body)

Create a new todo

Stores a new todo in the database

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class StoreTodoExample
    {
        public void main()
        {
            var apiInstance = new TodosApi();
            var body = new ApiTodosBody(); // ApiTodosBody | 

            try
            {
                // Create a new todo
                Todo result = apiInstance.StoreTodo(body);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TodosApi.StoreTodo: " + e.Message );
            }
        }
    }
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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
<a name="updatetodo"></a>
# **UpdateTodo**
> Todo UpdateTodo (TodosIdBody body, int? id)

Update a todo

Updates an existing todo

### Example
```csharp
using System;
using System.Diagnostics;
using IO.Swagger.Api;
using IO.Swagger.Client;
using IO.Swagger.Model;

namespace Example
{
    public class UpdateTodoExample
    {
        public void main()
        {
            var apiInstance = new TodosApi();
            var body = new TodosIdBody(); // TodosIdBody | 
            var id = 56;  // int? | 

            try
            {
                // Update a todo
                Todo result = apiInstance.UpdateTodo(body, id);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling TodosApi.UpdateTodo: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**TodosIdBody**](TodosIdBody.md)|  | 
 **id** | **int?**|  | 

### Return type

[**Todo**](Todo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)
