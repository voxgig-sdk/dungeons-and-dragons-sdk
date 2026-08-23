<?php
declare(strict_types=1);

// DungeonsAndDragons SDK configuration

class DungeonsAndDragonsConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "DungeonsAndDragons",
                "slug" => "dungeons-and-dragons",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://www.dnd5eapi.co/api",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "get_api_root" => [],
                    "get_resource_by_index" => [],
                    "get_resource_list" => [],
                    "graph_ql" => [],
                ],
            ],
            "entity" => [
        'get_api_root' => [
          'fields' => [
            [
              'name' => 'abilityscores',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'alignments',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'backgrounds',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'classes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'conditions',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'damagetypes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'equipment',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'equipmentcategories',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'feats',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'features',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'key',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'languages',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'magicitems',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'magicschools',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'monsters',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'proficiencies',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'races',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rules',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'rulesections',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'skills',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'spells',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subclasses',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'subraces',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'traits',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'weaponproperties',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_api_root',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/',
                  'parts' => [],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_resource_by_index' => [
          'fields' => [
            [
              'name' => 'index',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_resource_by_index',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'index',
                        'orig' => 'index',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                      [
                        'kind' => 'param',
                        'name' => 'resource',
                        'orig' => 'resource',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{resource}/{index}',
                  'parts' => [
                    '{resource}',
                    '{index}',
                  ],
                  'select' => [
                    'exist' => [
                      'index',
                      'resource',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'get_resource_list' => [
          'fields' => [
            [
              'name' => 'index',
              'short' => 'Resource index for URL purposes',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'name',
              'short' => 'Name of the resource',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'url',
              'short' => 'URL of the resource',
              'type' => '`$STRING`',
            ],
          ],
          'name' => 'get_resource_list',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'params' => [
                      [
                        'kind' => 'param',
                        'name' => 'id',
                        'orig' => 'resource',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/{resource}',
                  'parts' => [
                    '{id}',
                  ],
                  'rename' => [
                    'param' => [
                      'resource' => 'id',
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'id',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body.results`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
        'graph_ql' => [
          'fields' => [
            [
              'name' => 'data',
              'short' => 'Query results',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'errors',
              'short' => 'Any errors that occurred',
              'type' => '`$ARRAY`',
            ],
            [
              'name' => 'operationName',
              'short' => 'Optional operation name if multiple operations in query',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'query',
              'req' => true,
              'short' => 'GraphQL query string',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'variables',
              'short' => 'Optional variables for the query',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'graph_ql',
          'op' => [
            'create' => [
              'input' => 'data',
              'name' => 'create',
              'points' => [
                [
                  'args' => [],
                  'kind' => 'http',
                  'method' => 'POST',
                  'orig' => '/graphql',
                  'parts' => [
                    'graphql',
                  ],
                  'select' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return DungeonsAndDragonsFeatures::make_feature($name);
    }
}
