<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Lagdo\DbAdmin\DbAdminPackage;
use Symfony\Component\HttpFoundation\Response;

use function config;

class DbAdminPackageConfig
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Copy the audit options into the DbAdminPackage package options.
        $options = config('jaxon.app.packages')[DbAdminPackage::class];
        $options['audit'] = [
            'options' => config('dbadmin.audit.options'),
            'database' => config('dbadmin.audit.database'),
        ];
        config([
            'jaxon.app.packages' => [
                DbAdminPackage::class => $options,
            ],
            'jaxon.lib.core.request.uri' => '/jaxon',
            'jaxon.lib.js.app.file' => 'app-0.2.5',
        ]);

        return $next($request);
    }
}
