/*
 * Todo API
 * API documentation for Todo management
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@example.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.47
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {ApiTodosBody} from '../model/ApiTodosBody';
import {Todo} from '../model/Todo';
import {TodosIdBody} from '../model/TodosIdBody';

/**
* Todos service.
* @module api/TodosApi
* @version 1.0.0
*/
export class TodosApi {

    /**
    * Constructs a new TodosApi. 
    * @alias module:api/TodosApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the deleteTodo operation.
     * @callback moduleapi/TodosApi~deleteTodoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a todo
     * Deletes a specific todo
     * @param {Number} id 
     * @param {module:api/TodosApi~deleteTodoCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTodo(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling deleteTodo");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/todos/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTodoById operation.
     * @callback moduleapi/TodosApi~getTodoByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific todo
     * Returns a single todo
     * @param {Number} id 
     * @param {module:api/TodosApi~getTodoByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTodoById(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getTodoById");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Todo;

      return this.apiClient.callApi(
        '/api/todos/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTodosList operation.
     * @callback moduleapi/TodosApi~getTodosListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Todo>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get list of todos
     * Returns a list of todos
     * @param {module:api/TodosApi~getTodosListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTodosList(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Todo];

      return this.apiClient.callApi(
        '/api/todos', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the storeTodo operation.
     * @callback moduleapi/TodosApi~storeTodoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new todo
     * Stores a new todo in the database
     * @param {module:model/ApiTodosBody} body 
     * @param {module:api/TodosApi~storeTodoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    storeTodo(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling storeTodo");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Todo;

      return this.apiClient.callApi(
        '/api/todos', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTodo operation.
     * @callback moduleapi/TodosApi~updateTodoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Todo{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a todo
     * Updates an existing todo
     * @param {module:model/TodosIdBody} body 
     * @param {Number} id 
     * @param {module:api/TodosApi~updateTodoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    updateTodo(body, id, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTodo");
      }
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling updateTodo");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Todo;

      return this.apiClient.callApi(
        '/api/todos/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}