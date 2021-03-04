<?php

use App\Http\Controllers\v1\Admin\UserController;
use App\Http\Controllers\v1\Auth\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('register', [AuthController::class, 'register']);
        Route::post('login', [AuthController::class, 'login']);
        Route::middleware('auth:api')->get('profile', [AuthController::class, 'getAuthenticatedUser']);
    });

    Route::resource('users', UserController::class)
        ->name('index','userIndex');
});


