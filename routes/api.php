<?php

use App\Http\Controllers\v1\Auth\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        Route::post('register',[AuthController::class, 'register']);
        Route::post('login',[AuthController::class, 'login']);
        Route::get('profile',[AuthController::class, 'getAuthenticatedUser']);

        Route::middleware('auth:api')->get('/user', function (Request $request) {
            return $request->user();
        });
    });
});

