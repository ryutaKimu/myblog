<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\BlogCommentsController;
use App\Http\Controllers\BlogContentsController;
use App\Http\Controllers\BlogController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::resource('blog', BlogController::class);
Route::resource('blogContent',BlogContentsController::class);
Route::resource('blogComment',BlogCommentsController::class);
Route::resource('admin',AdminController::class);

