<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix("auth")->controller(AuthController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
    Route::post('logout', 'logout');

    Route::middleware(['auth:sanctum','abilities:admin'])->post('admin', function() {
        return response()->noContent();
    });
    
    Route::middleware(['auth:sanctum','ability:user,admin'])->post('user', function() {
        return response()->noContent();
    });
});
        
Route::controller(UserController::class)->group(function () {
    Route::get('users', 'users');
});