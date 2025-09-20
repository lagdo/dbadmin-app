<?php

use App\Http\Middleware\DbAdminLogging;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', fn() => view('dbadmin'))
    ->middleware(['auth', 'jaxon.config']);

Route::get('/logging', fn() => view('logging'))
    ->middleware(['auth', DbAdminLogging::class, 'jaxon.config'])
    ->name('logging');

Route::post('/logging/jaxon', fn() => response()->json([]))
    ->middleware(['web', DbAdminLogging::class, 'jaxon.config', 'jaxon.ajax']);

// Logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout.get')->middleware('auth');
