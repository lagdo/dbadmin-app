<?php

namespace App\Providers;

use Dotenv\Dotenv;
use Illuminate\Support\ServiceProvider;
use Lagdo\DbAdmin\Config\AuthInterface;
use Lagdo\DbAdmin\Config\UserFileReader;

use function auth;
use function dirname;
use function config_path;
use function is_file;
use function jaxon;

class DbAdminServiceProvider extends ServiceProvider
{
    /**
     * Get the DbAdmin config file path
     *
     * @return string
     */
    private function getDbAdminConfigFile(): string
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
        jaxon()->di()->set(AuthInterface::class,
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
        $this->app->singleton(UserFileReader::class . '_config',
            fn() => $this->getDbAdminConfigFile());
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Load the custom env file
        $path = dirname(__DIR__, 2);
        $dotenv = Dotenv::createImmutable($path, '.env.dbadmin');
        $dotenv->safeLoad();
    }
}
