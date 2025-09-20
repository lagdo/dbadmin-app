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
            Lagdo\DbAdmin\DbAdminPackage::class => [
                'provider' => function(array $options) {
                    $reader = jaxon()->di()->g(UserFileReader::class);
                    $cfgFilePath = app()->make('dbadmin_config_file_path');
                    return $reader->getOptions($cfgFilePath, $options);
                },
                'access' => [
                    'server' => true,
                    'system' => false,
                ],
                'logging' => [
                    'options' => [
                        'library' => [
                            'enabled' => false,
                        ],
                        'enduser' => [
                            'enabled' => false,
                        ],
                        'history' => [
                            'enabled' => false,
                            'distinct' => true,
                            'limit' => 15,
                        ],
                    ],
                    'database' => [
                        // Same as the "servers" items, but "name" is the database name.
                        // 'driver' => 'pgsql',
                        // 'host' => "env(LOGGING_DB_HOST)",
                        // 'port' => "env(LOGGING_DB_PORT)",
                        // 'username' => "env(LOGGING_DB_USERNAME)",
                        // 'password' => "env(LOGGING_DB_PASSWORD)",
                        // 'name' => 'logging',
                    ],
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
                'file' => 'app-0.1.6',
            ],
        ],
    ],
];
