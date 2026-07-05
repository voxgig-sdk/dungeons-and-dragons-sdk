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
| `ability_score` | `string` | No |  |
| `alignment` | `string` | No |  |
| `background` | `string` | No |  |
| `class` | `string` | No |  |
| `condition` | `string` | No |  |
| `damage_type` | `string` | No |  |
| `equipment` | `string` | No |  |
| `equipment_category` | `string` | No |  |
| `feat` | `string` | No |  |
| `feature` | `string` | No |  |
| `key` | `string` | No |  |
| `language` | `string` | No |  |
| `magic_item` | `string` | No |  |
| `magic_school` | `string` | No |  |
| `monster` | `string` | No |  |
| `proficiency` | `string` | No |  |
| `race` | `string` | No |  |
| `rule` | `string` | No |  |
| `rule_section` | `string` | No |  |
| `skill` | `string` | No |  |
| `spell` | `string` | No |  |
| `subclass` | `string` | No |  |
| `subrace` | `string` | No |  |
| `trait` | `string` | No |  |
| `weapon_property` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetApiRoot(nil).Load(nil, nil)
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
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.GetResourceByIndex(nil).Load(nil, nil)
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
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

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
| `data` | `map[string]any` | No |  |
| `error` | `[]any` | No |  |
| `operation_name` | `string` | No |  |
| `query` | `string` | Yes |  |
| `variable` | `map[string]any` | No |  |

### Operations

#### `Create(reqdata, ctrl map[string]any) (any, error)`

Create a new entity with the given data.

```go
result, err := client.GraphQl(nil).Create(map[string]any{
    "query": /* string */,
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

