# DungeonsAndDragons SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "DungeonsAndDragons",
            "slug": "dungeons-and-dragons",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://www.dnd5eapi.co/api",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "get_api_root": {},
                "get_resource_by_index": {},
                "get_resource_list": {},
                "graph_ql": {},
            },
        },
        "entity": {
      "get_api_root": {
        "fields": [
          {
            "name": "abilityscores",
            "type": "`$STRING`",
          },
          {
            "name": "alignments",
            "type": "`$STRING`",
          },
          {
            "name": "backgrounds",
            "type": "`$STRING`",
          },
          {
            "name": "classes",
            "type": "`$STRING`",
          },
          {
            "name": "conditions",
            "type": "`$STRING`",
          },
          {
            "name": "damagetypes",
            "type": "`$STRING`",
          },
          {
            "name": "equipment",
            "type": "`$STRING`",
          },
          {
            "name": "equipmentcategories",
            "type": "`$STRING`",
          },
          {
            "name": "feats",
            "type": "`$STRING`",
          },
          {
            "name": "features",
            "type": "`$STRING`",
          },
          {
            "name": "key",
            "type": "`$STRING`",
          },
          {
            "name": "languages",
            "type": "`$STRING`",
          },
          {
            "name": "magicitems",
            "type": "`$STRING`",
          },
          {
            "name": "magicschools",
            "type": "`$STRING`",
          },
          {
            "name": "monsters",
            "type": "`$STRING`",
          },
          {
            "name": "proficiencies",
            "type": "`$STRING`",
          },
          {
            "name": "races",
            "type": "`$STRING`",
          },
          {
            "name": "rules",
            "type": "`$STRING`",
          },
          {
            "name": "rulesections",
            "type": "`$STRING`",
          },
          {
            "name": "skills",
            "type": "`$STRING`",
          },
          {
            "name": "spells",
            "type": "`$STRING`",
          },
          {
            "name": "subclasses",
            "type": "`$STRING`",
          },
          {
            "name": "subraces",
            "type": "`$STRING`",
          },
          {
            "name": "traits",
            "type": "`$STRING`",
          },
          {
            "name": "weaponproperties",
            "type": "`$STRING`",
          },
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
                  "res": "`body`",
                },
                "parts": [],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_resource_by_index": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "index",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "from": {
            "index": "index",
          },
          "name": "id",
          "parts": [
            "resource",
            "index",
          ],
          "sep": "/",
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "param",
                      "name": "resource",
                      "orig": "resource",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{resource}/{index}",
                "segments": [
                  {
                    "var": "resource",
                  },
                  {
                    "var": "index",
                  },
                ],
                "select": {
                  "exist": [
                    "index",
                    "resource",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "{resource}",
                  "{index}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "get_resource_list": {
        "fields": [
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "index",
            "short": "Resource index for URL purposes",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "short": "Name of the resource",
            "type": "`$STRING`",
          },
          {
            "name": "url",
            "short": "URL of the resource",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/{resource}",
                "rename": {
                  "param": {
                    "resource": "id",
                  },
                },
                "segments": [
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.results`",
                },
                "parts": [
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "graph_ql": {
        "fields": [
          {
            "name": "data",
            "short": "Query results",
            "type": "`$OBJECT`",
          },
          {
            "name": "errors",
            "short": "Any errors that occurred",
            "type": "`$ARRAY`",
          },
          {
            "name": "operationName",
            "short": "Optional operation name if multiple operations in query",
            "type": "`$STRING`",
          },
          {
            "name": "query",
            "req": True,
            "short": "GraphQL query string",
            "type": "`$STRING`",
          },
          {
            "name": "variables",
            "short": "Optional variables for the query",
            "type": "`$OBJECT`",
          },
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
                    "lit": "graphql",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "graphql",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
