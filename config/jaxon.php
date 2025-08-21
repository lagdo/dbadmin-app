<?php

use Lagdo\DbAdmin\Config\UserFileReader;

return [
    'app' => [
        'request' => [
            'route' => 'jaxon.ajax', // The route name
            'middlewares' => [
                'web', // Includes the Illuminate\Session\Middleware\StartSession
                // middleware, which returns a 419 error when the sessions has expired.
            ],
        ],
        'directories' => [],
        'packages' => [
            Lagdo\DbAdmin\Package::class => [
                'provider' => function(array $options) {
                    $reader = app()->make(UserFileReader::class);
                    return $reader->getOptions($options);
                },
                'access' => [
                    'server' => true,
                    'system' => false,
                ],
            ],
        ],
        'ui' => [
            'template' => 'bootstrap5',
        ],
        'dialogs' => [
            'default' => [
                'modal' => 'bootbox',
                'alert' => 'toastr',
                'confirm' => 'noty',
            ],
        ],
    ],
    'lib' => [
        'core' => [
            'language' => 'en',
            'encoding' => 'UTF-8',
            'prefix' => [
                'class' => '',
            ],
            'request' => [
                'csrf_meta' => 'csrf-token',
                'uri' => '/jaxon', // The route url
            ],
            'debug' => [
                'on' => false,
                'verbose' => false,
            ],
            'error' => [
                'handle' => false,
            ],
        ],
        'js' => [
            'lib' => [
            ],
            'app' => [
                'uri' => '/jaxon/',
                'dir' => public_path('/jaxon/'),
                'export' => true,
                'minify' => true,
                'file' => 'app-0.1.0',
            ],
        ],
    ],
];
