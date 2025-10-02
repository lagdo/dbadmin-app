<?php

return [
    'common' => [
        'access' => [
            'server' => true,
            'system' => false,
        ],
    ],
    'fallback' => [
    ],
    'users' => [
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
                'limit' => 10,
            ],
            'favorite' => [
                'enabled' => false,
                'limit' => 10,
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
        'allowed' => [
            // The emails of users that are allowed to access the logging page.
        ],
    ],
];
