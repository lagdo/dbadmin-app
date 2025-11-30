<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Lagdo\DbAdmin\DbAdminPackage;

use function is_callable;
use function jaxon;
use function response;

class ExportController
{
    /**
     * @param string $filename
     *
     * @return Response
     */
    public function __invoke(string $filename): Response
    {
        $package = jaxon()->package(DbAdminPackage::class);
        $reader = $package->getOption('export.reader');
        $content = !is_callable($reader) ? "No export reader set." : $reader($filename);

        return response($content)->header('Content-Type', 'text/plain');
    }
}
