<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Lagdo\DbAdmin\Config\AuthInterface;
use Lagdo\DbAdmin\Config\UserFileReader;

use function auth;
use function config_path;
use function is_file;

class DbAdminServiceProvider extends ServiceProvider
{
    /**
     * Get the DbAdmin config path
     *
     * @return string
     */
    private function getDbAdminConfigPath(): string
    {
        foreach (['json', 'yaml', 'yml', 'php'] as $ext) {
            $path = config_path("dbadmin.$ext");
            if (is_file($path)) {
                return $path;
            }
        }
        return '';
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(AuthInterface::class,
            fn() => new class implements AuthInterface {
                public function user(): string
                {
                    return auth()->user()?->email ?? '';
                }
                public function role(): string
                {
                    return auth()->user()?->role?->name ?? '';
                }
            });

        $this->app->singleton(UserFileReader::class, function($app) {
            $auth = $app->make(AuthInterface::class);
            return new UserFileReader($auth, $this->getDbAdminConfigPath());
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
