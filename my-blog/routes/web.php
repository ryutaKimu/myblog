<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/home/blog', function () {
    return view('index');
});

Route::get('/home', function () {
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