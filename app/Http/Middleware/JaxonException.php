<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Jaxon\App\Dialog\AlertInterface;
use Lagdo\DbAdmin\Ajax\AppException;
use Closure;

use function jaxon;

class JaxonException
{
    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        /** @var AlertInterface */
        $alert = jaxon()->getResponse()->dialog;
        $callback = fn(AppException $e) =>
            $alert->title('Warning')->warning($e->getMessage());
        jaxon()->callback()->error($callback, AppException::class);

        return $next($request);
    }
}
