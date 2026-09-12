package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "DungeonsAndDragons",
			"slug": "dungeons-and-dragons",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://www.dnd5eapi.co/api",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"get_api_root": map[string]any{},
				"get_resource_by_index": map[string]any{},
				"get_resource_list": map[string]any{},
				"graph_ql": map[string]any{},
			},
		},
		"entity": map[string]any{
			"get_api_root": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "abilityscores",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "alignments",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "backgrounds",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "classes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "conditions",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "damagetypes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "equipment",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "equipmentcategories",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "feats",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "features",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "key",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "languages",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "magicitems",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "magicschools",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "monsters",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "proficiencies",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "races",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rules",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "rulesections",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "skills",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "spells",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subclasses",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subraces",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "traits",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "weaponproperties",
						"type": "`$STRING`",
					},
				},
				"name": "get_api_root",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_resource_by_index": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"from": map[string]any{
						"index": "index",
					},
					"name": "id",
					"parts": []any{
						"resource",
						"index",
					},
					"sep": "/",
				},
				"name": "get_resource_by_index",
				"op": map[string]any{
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "index",
											"orig": "index",
											"reqd": true,
											"type": "`$STRING`",
										},
										map[string]any{
											"kind": "param",
											"name": "resource",
											"orig": "resource",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{resource}/{index}",
								"segments": []any{
									map[string]any{
										"var": "resource",
									},
									map[string]any{
										"var": "index",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"index",
										"resource",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"{resource}",
									"{index}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"get_resource_list": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "index",
						"short": "Resource index for URL purposes",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the resource",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "url",
						"short": "URL of the resource",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "get_resource_list",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "resource",
											"reqd": true,
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{resource}",
								"rename": map[string]any{
									"param": map[string]any{
										"resource": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.results`",
								},
								"parts": []any{
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"graph_ql": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "data",
						"short": "Query results",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "errors",
						"short": "Any errors that occurred",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "operationName",
						"short": "Optional operation name if multiple operations in query",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "query",
						"req": true,
						"short": "GraphQL query string",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "variables",
						"short": "Optional variables for the query",
						"type": "`$OBJECT`",
					},
				},
				"name": "graph_ql",
				"op": map[string]any{
					"create": map[string]any{
						"input": "data",
						"name": "create",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "POST",
								"orig": "/graphql",
								"segments": []any{
									map[string]any{
										"lit": "graphql",
									},
								},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"graphql",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
