
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'DungeonsAndDragons',
        slug: "dungeons-and-dragons",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.dnd5eapi.co/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        get_api_root: {
        },
  
        get_resource_by_index: {
        },
  
        get_resource_list: {
        },
  
        graph_ql: {
        },
  
    }
  }


  entity = {
    "get_api_root": {
      "fields": [
        {
          "name": "abilityscores",
          "type": "`$STRING`"
        },
        {
          "name": "alignments",
          "type": "`$STRING`"
        },
        {
          "name": "backgrounds",
          "type": "`$STRING`"
        },
        {
          "name": "classes",
          "type": "`$STRING`"
        },
        {
          "name": "conditions",
          "type": "`$STRING`"
        },
        {
          "name": "damagetypes",
          "type": "`$STRING`"
        },
        {
          "name": "equipment",
          "type": "`$STRING`"
        },
        {
          "name": "equipmentcategories",
          "type": "`$STRING`"
        },
        {
          "name": "feats",
          "type": "`$STRING`"
        },
        {
          "name": "features",
          "type": "`$STRING`"
        },
        {
          "name": "key",
          "type": "`$STRING`"
        },
        {
          "name": "languages",
          "type": "`$STRING`"
        },
        {
          "name": "magicitems",
          "type": "`$STRING`"
        },
        {
          "name": "magicschools",
          "type": "`$STRING`"
        },
        {
          "name": "monsters",
          "type": "`$STRING`"
        },
        {
          "name": "proficiencies",
          "type": "`$STRING`"
        },
        {
          "name": "races",
          "type": "`$STRING`"
        },
        {
          "name": "rules",
          "type": "`$STRING`"
        },
        {
          "name": "rulesections",
          "type": "`$STRING`"
        },
        {
          "name": "skills",
          "type": "`$STRING`"
        },
        {
          "name": "spells",
          "type": "`$STRING`"
        },
        {
          "name": "subclasses",
          "type": "`$STRING`"
        },
        {
          "name": "subraces",
          "type": "`$STRING`"
        },
        {
          "name": "traits",
          "type": "`$STRING`"
        },
        {
          "name": "weaponproperties",
          "type": "`$STRING`"
        }
      ],
      "name": "get_api_root",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "segments": [],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": []
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_resource_by_index": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "from": {
          "index": "index"
        },
        "name": "id",
        "parts": [
          "resource",
          "index"
        ],
        "sep": "/"
      },
      "name": "get_resource_by_index",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "index",
                    "orig": "index",
                    "reqd": true,
                    "type": "`$STRING`"
                  },
                  {
                    "kind": "param",
                    "name": "resource",
                    "orig": "resource",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{resource}/{index}",
              "segments": [
                {
                  "var": "resource"
                },
                {
                  "var": "index"
                }
              ],
              "select": {
                "exist": [
                  "index",
                  "resource"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "{resource}",
                "{index}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "get_resource_list": {
      "fields": [
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "index",
          "short": "Resource index for URL purposes",
          "type": "`$STRING`"
        },
        {
          "name": "name",
          "short": "Name of the resource",
          "type": "`$STRING`"
        },
        {
          "name": "url",
          "short": "URL of the resource",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "get_resource_list",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "kind": "param",
                    "name": "id",
                    "orig": "resource",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{resource}",
              "rename": {
                "param": {
                  "resource": "id"
                }
              },
              "segments": [
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.results`"
              },
              "parts": [
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "graph_ql": {
      "fields": [
        {
          "name": "data",
          "short": "Query results",
          "type": "`$OBJECT`"
        },
        {
          "name": "errors",
          "short": "Any errors that occurred",
          "type": "`$ARRAY`"
        },
        {
          "name": "operationName",
          "short": "Optional operation name if multiple operations in query",
          "type": "`$STRING`"
        },
        {
          "name": "query",
          "req": true,
          "short": "GraphQL query string",
          "type": "`$STRING`"
        },
        {
          "name": "variables",
          "short": "Optional variables for the query",
          "type": "`$OBJECT`"
        }
      ],
      "name": "graph_ql",
      "op": {
        "create": {
          "input": "data",
          "name": "create",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "POST",
              "orig": "/graphql",
              "segments": [
                {
                  "lit": "graphql"
                }
              ],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "graphql"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

