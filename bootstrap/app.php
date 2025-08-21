<?php

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Jaxon\Exception\Exception as JaxonException;
use Jaxon\Laravel\App\Jaxon;
use Lagdo\DbAdmin\Ajax\AppException;
use Symfony\Component\HttpFoundation\Response;

if (!function_exists('showMessage')) {
    /**
     * @param string $message
     * @param bool $isError
     *
     * @return Response
     */
    function showMessage(string $message, bool $isError): Response
    {
        /** @var Jaxon */
        $jaxon = app()->make(Jaxon::class);
        $ajaxResponse = $jaxon->ajaxResponse();
        $messageType = $isError ? 'error' : 'warning';
        $messageTitle = $isError ? trans('Error') : trans('Warning');
        $ajaxResponse->dialog->title($messageTitle)->$messageType($message);

        return $jaxon->httpResponse();
    }
}

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        //
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // When the session expires, redirect any Jaxon request to the login page.
        $exceptions->respond(function (Response $response) {
            /** @var Jaxon */
            $jaxon = app()->make(Jaxon::class);
            if ($response->getStatusCode() !== 419 || !$jaxon->canProcessRequest()) {
                return $response;
            }
    
            // Handle token expiration errors on Jaxon requests.
            $ajaxResponse = $jaxon->ajaxResponse();
            $ajaxResponse->redirect(route('login'));

            return $jaxon->httpResponse();
        });

        // Show the error messages in a dialog
        $exceptions->render(fn (AppException $e) =>
            showMessage($e->getMessage(), false));
        $exceptions->render(fn (JaxonException $e) =>
            showMessage($e->getMessage(), true));
    })->create();
