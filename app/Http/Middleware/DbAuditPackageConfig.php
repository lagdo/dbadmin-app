<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Lagdo\DbAdmin\Db\DbAuditPackage;
use Symfony\Component\HttpFoundation\Response;

use function config;

class DbAuditPackageConfig
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Copy the audit options into the DbAuditPackage package options.
        config([
            'jaxon.app.packages' => [
                DbAuditPackage::class => [
                    'options' => config('dbadmin.audit.options'),
                    'database' => config('dbadmin.audit.database')
                ],
            ],
            'jaxon.lib.core.request.uri' => '/audit/jaxon',
            'jaxon.lib.js.app.file' => 'audit-0.3.0',
        ]);

        return $next($request);
    }
}
