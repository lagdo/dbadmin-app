<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Lagdo\DbAdmin\LoggingPackage;
use Symfony\Component\HttpFoundation\Response;

use function config;

class DbAdminLogReader
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Copy the DbAdmin logging options into the Jaxon packages options.
        config([
            'jaxon.app.packages' => [
                LoggingPackage::class => [
                    'options' => config('dbadmin.logging.reader'),
                    'database' => config('dbadmin.logging.database')
                ],
            ],
            'jaxon.lib.core.request.uri' => '/logging/jaxon',
            'jaxon.lib.js.app.file' => 'log-1.0.0',
        ]);

        return $next($request);
    }
}
