# DungeonsAndDragons Golang SDK Reference

Complete API reference for the DungeonsAndDragons Golang SDK.


## DungeonsAndDragonsSDK

### Constructor

```go
func NewDungeonsAndDragonsSDK(options map[string]any) *DungeonsAndDragonsSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *DungeonsAndDragonsSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *DungeonsAndDragonsSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `GetApiRoot(data map[string]any) DungeonsAndDragonsEntity`

Create a new `GetApiRoot` entity instance. Pass `nil` for no initial data.

#### `GetResourceByIndex(data map[string]any) DungeonsAndDragonsEntity`

Create a new `GetResourceByIndex` entity instance. Pass `nil` for no initial data.

#### `GetResourceList(data map[string]any) DungeonsAndDragonsEntity`

Create a new `GetResourceList` entity instance. Pass `nil` for no initial data.

#### `GraphQl(data map[string]any) DungeonsAndDragonsEntity`

Create a new `GraphQl` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GetApiRootEntity

```go
get_api_root := client.GetApiRoot(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability_score` | ``$STRING`` | No |  |
| `alignment` | ``$STRING`` | No |  |
| `background` | ``$STRING`` | No |  |
| `class` | ``$STRING`` | No |  |
| `condition` | ``$STRING`` | No |  |
| `damage_type` | ``$STRING`` | No |  |
| `equipment` | ``$STRING`` | No |  |
| `equipment_category` | ``$STRING`` | No |  |
| `feat` | ``$STRING`` | No |  |
| `feature` | ``$STRING`` | No |  |
| `key` | ``$STRING`` | No |  |
| `language` | ``$STRING`` | No |  |
| `magic_item` | ``$STRING`` | No |  |
| `magic_school` | ``$STRING`` | No |  |
| `monster` | ``$STRING`` | No |  |
| `proficiency` | ``$STRING`` | No |  |
| `race` | ``$STRING`` | No |  |
| `rule` | ``$STRING`` | No |  |
| `rule_section` | ``$STRING`` | No |  |
| `skill` | ``$STRING`` | No |  |
| `spell` | ``$STRING`` | No |  |
| `subclass` | ``$STRING`` | No |  |
| `subrace` | ``$STRING`` | No |  |
| `trait` | ``$STRING`` | No |  |
| `weapon_property` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetApiRoot(nil).Load(map[string]any{"id": "get_api_root_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetApiRootEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GetResourceByIndexEntity

```go
get_resource_by_index := client.GetResourceByIndex(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetResourceByIndex(nil).Load(map[string]any{"id": "get_resource_by_index_id"}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetResourceByIndexEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GetResourceListEntity

```go
get_resource_list := client.GetResourceList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.GetResourceList(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GetResourceListEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## GraphQlEntity

```go
graph_ql := client.GraphQl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | ``$OBJECT`` | No |  |
| `error` | ``$ARRAY`` | No |  |
| `operation_name` | ``$STRING`` | No |  |
| `query` | ``$STRING`` | Yes |  |
| `variable` | ``$OBJECT`` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GraphQl(nil).Create(map[string]any{
    "query": /* `$STRING` */,
}, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GraphQlEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewDungeonsAndDragonsSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

