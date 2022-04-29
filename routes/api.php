<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\ProjectController;

Route::post('register',[AuthController::class, 'register']);
Route::post('login',[AuthController::class, 'login']);
Route::post('addProject',[ProjectController::class, 'addProject']);
Route::get('projectList',[ProjectController::class, 'projectList']);
Route::get('projecArchive',[ProjectController::class, 'projecArchive']);
Route::get('projectCompleted',[ProjectController::class, 'projectCompleted']);
Route::put('completed/{id}',[ProjectController::class, 'completed']);
Route::put('archive/{id}',[ProjectController::class, 'archive']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
