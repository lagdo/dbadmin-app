<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;

use function config;
use function in_array;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Auth gate for the DbAdmin logging page
        Gate::define('logging', fn (User $user) =>
            in_array($user->email, config('dbadmin.logging.allowed', [])));
    }
}
