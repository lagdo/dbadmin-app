<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Lagdo\DbAdmin\DbAdminPackage;
use Symfony\Component\HttpFoundation\Response;

use function config;

class DbAdminLogWriter
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Copy the DbAdmin logging options into the Jaxon packages options.
        $options = config('jaxon.app.packages')[DbAdminPackage::class];
        $options['logging'] = [
            'options' => config('dbadmin.logging.options'),
            'database' => config('dbadmin.logging.database'),
        ];
        config([
            'jaxon.app.packages' => [
                DbAdminPackage::class => $options,
            ],
        ]);

        return $next($request);
    }
}
