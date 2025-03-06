<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TodoController;

Route::middleware('api')->group(function () {
    Route::apiResource('todos', TodoController::class);
});