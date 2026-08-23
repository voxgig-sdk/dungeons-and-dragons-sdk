-- DungeonsAndDragons SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "DungeonsAndDragons",
      slug = "dungeons-and-dragons",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://www.dnd5eapi.co/api",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["get_api_root"] = {},
        ["get_resource_by_index"] = {},
        ["get_resource_list"] = {},
        ["graph_ql"] = {},
      },
    },
    entity = {
      ["get_api_root"] = {
        ["fields"] = {
          {
            ["name"] = "abilityscores",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "alignments",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "backgrounds",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "classes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "conditions",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "damagetypes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "equipment",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "equipmentcategories",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "feats",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "features",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "key",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "languages",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "magicitems",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "magicschools",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "monsters",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "proficiencies",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "races",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rules",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "rulesections",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "skills",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "spells",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subclasses",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "subraces",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "traits",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "weaponproperties",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_api_root",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["get_resource_by_index"] = {
        ["fields"] = {
          {
            ["name"] = "index",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_resource_by_index",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "index",
                      ["orig"] = "index",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["kind"] = "param",
                      ["name"] = "resource",
                      ["orig"] = "resource",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{resource}/{index}",
                ["parts"] = {
                  "{resource}",
                  "{index}",
                },
                ["select"] = {
                  ["exist"] = {
                    "index",
                    "resource",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["get_resource_list"] = {
        ["fields"] = {
          {
            ["name"] = "index",
            ["short"] = "Resource index for URL purposes",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the resource",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "url",
            ["short"] = "URL of the resource",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "get_resource_list",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "resource",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/{resource}",
                ["parts"] = {
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["resource"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.results`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["graph_ql"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["short"] = "Query results",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "errors",
            ["short"] = "Any errors that occurred",
            ["type"] = "`$ARRAY`",
          },
          {
            ["name"] = "operationName",
            ["short"] = "Optional operation name if multiple operations in query",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "query",
            ["req"] = true,
            ["short"] = "GraphQL query string",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "variables",
            ["short"] = "Optional variables for the query",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "graph_ql",
        ["op"] = {
          ["create"] = {
            ["input"] = "data",
            ["name"] = "create",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "POST",
                ["orig"] = "/graphql",
                ["parts"] = {
                  "graphql",
                },
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
