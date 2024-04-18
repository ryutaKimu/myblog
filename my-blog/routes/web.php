<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('index');
});

Route::get('/home/blog', function () {
    return view('index'); // ここで適切なビューを返却する例です
});

Route::get('/home', function () {
    return view('index'); // ここで適切なビューを返却する例です
});