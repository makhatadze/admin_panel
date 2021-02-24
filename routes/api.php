<?php

use App\Http\Controllers\v1\Admin\UserController;
use App\Http\Controllers\v1\Auth\AuthController;
use App\Http\Resources\UserCollection;
use App\Http\Resources\UserResource;
use App\Models\User;
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
    Route::resource('/users',UserController::class);
});

//Route::get('/users', function () {
//    return UserResource::collection(User::all()->keyBy->id);
//});
//
//Route::get('/usersc', function () {
//   return new UserCollection(User::paginate(2)->appends(request()->query()));
//});


