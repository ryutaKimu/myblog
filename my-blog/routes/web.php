<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::get('/admin',function(){
    return view('index');
});

Route::post('/admin/login',[AdminController::class,'login'])->name('index');

Route::get('/admin/home', function () {
    return view('index');
});

Route::get('/home', function () {
    return view('index'); 
});

Route::get('/home/blog', function () {
    return view('index');
});



Route::get('/home/profile', function () {
    return view('index'); 
});

Route::get('/home/gallery', function () {
    return view('index'); 
});

Route::fallback(function(){
    return view("index");
});