<?php

use App\Http\Middleware\DbAdminLogWriter;
use Illuminate\Support\Facades\Route;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

Route::get('/', fn() => view('dbadmin'))
    ->middleware(['auth', DbAdminLogWriter::class, 'jaxon.config']);

Route::get('/logging', fn() => view('logging'))
    ->middleware(['auth', 'dbadmin.log.reader'])
    ->name('logging');

Route::post('/logging/jaxon', fn() => response()->json([]))
    ->middleware(['web', 'dbadmin.log.reader', 'jaxon.ajax']);

// Logout
Route::get('/logout', [AuthenticatedSessionController::class, 'destroy'])
    ->name('logout.get')->middleware('auth');
