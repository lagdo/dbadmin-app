<?php

use Lagdo\DbAdmin\Config\UserFileReader;

return [
    'app' => [
        'request' => [
            'route' => 'jaxon.ajax', // The route name
            'middlewares' => [
                'web',
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
                // 'uri' => '',
            ],
            'app' => [
                // 'uri' => '',
                // 'dir' => '',
                // 'export' => true,
                // 'minify' => true,
            ],
        ],
    ],
];
