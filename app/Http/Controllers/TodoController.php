<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

/**
 * @OA\Info(
 *      version="1.0.0",
 *      title="Todo API",
 *      description="API documentation for Todo management",
 *      @OA\Contact(
 *          email="support@example.com"
 *      )
 * )
 *
 * @OA\Tag(
 *     name="Todos",
 *     description="API Endpoints for Managing Todos"
 * )
 */
class TodoController extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/todos",
     *      operationId="getTodosList",
     *      tags={"Todos"},
     *      summary="Get list of todos",
     *      description="Returns a list of todos",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(ref="#/components/schemas/Todo")
     *          )
     *      )
     * )
     */
    public function index()
    {
        return response()->json(Todo::all());
    }

    /**
     * @OA\Post(
     *      path="/api/todos",
     *      operationId="storeTodo",
     *      tags={"Todos"},
     *      summary="Create a new todo",
     *      description="Stores a new todo in the database",
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"title"},
     *              @OA\Property(property="title", type="string", example="Buy groceries"),
     *              @OA\Property(property="description", type="string", example="Milk, Bread, Cheese")
     *          )
     *      ),
     *      @OA\Response(
     *          response=201,
     *          description="Todo created",
     *          @OA\JsonContent(ref="#/components/schemas/Todo")
     *      )
     * )
     */
    public function store(Request $request)
    {
        $todo = Todo::create($request->all());
        return response()->json($todo, 201);
    }

    /**
     * @OA\Get(
     *      path="/api/todos/{id}",
     *      operationId="getTodoById",
     *      tags={"Todos"},
     *      summary="Get a specific todo",
     *      description="Returns a single todo",
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          @OA\Schema(type="integer"),
     *          example=1
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent(ref="#/components/schemas/Todo")
     *      ),
     *      @OA\Response(response=404, description="Todo not found")
     * )
     */
    public function show($id)
    {
        $todo = Todo::findOrFail($id);
        return response()->json($todo);
    }

    /**
     * @OA\Put(
     *      path="/api/todos/{id}",
     *      operationId="updateTodo",
     *      tags={"Todos"},
     *      summary="Update a todo",
     *      description="Updates an existing todo",
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          @OA\Schema(type="integer"),
     *          example=1
     *      ),
     *      @OA\RequestBody(
     *          required=true,
     *          @OA\JsonContent(
     *              required={"title"},
     *              @OA\Property(property="title", type="string", example="Updated Todo"),
     *              @OA\Property(property="description", type="string", example="Updated description")
     *          )
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Todo updated",
     *          @OA\JsonContent(ref="#/components/schemas/Todo")
     *      )
     * )
     */
    public function update(Request $request, $id)
    {
        $todo = Todo::findOrFail($id);
        $todo->update($request->all());
        return response()->json($todo);
    }

    /**
     * @OA\Delete(
     *      path="/api/todos/{id}",
     *      operationId="deleteTodo",
     *      tags={"Todos"},
     *      summary="Delete a todo",
     *      description="Deletes a specific todo",
     *      @OA\Parameter(
     *          name="id",
     *          in="path",
     *          required=true,
     *          @OA\Schema(type="integer"),
     *          example=1
     *      ),
     *      @OA\Response(response=204, description="Todo deleted")
     * )
     */
    public function destroy($id)
    {
        Todo::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}
