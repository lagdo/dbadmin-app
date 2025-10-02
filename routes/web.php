<?php

use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', fn() => view('dbadmin'))
    ->middleware(['auth', 'jaxon.dbadmin.config', 'jaxon.config']);

Route::get('/logging', fn() => view('logging'))
    ->middleware(['auth', 'jaxon.logging.config'])
    ->name('logging');

Route::post('/logging/jaxon', fn() => response()->json([]))
    ->middleware(['web', 'jaxon.logging.config', 'jaxon.ajax']);

// Logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout.get')->middleware('auth');
