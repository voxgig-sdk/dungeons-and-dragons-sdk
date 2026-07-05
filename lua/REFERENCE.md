# DungeonsAndDragons Lua SDK Reference

Complete API reference for the DungeonsAndDragons Lua SDK.


## DungeonsAndDragonsSDK

### Constructor

```lua
local sdk = require("dungeons-and-dragons_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `GetApiRoot(data)`

Create a new `GetApiRoot` entity instance. Pass `nil` for no initial data.

#### `GetResourceByIndex(data)`

Create a new `GetResourceByIndex` entity instance. Pass `nil` for no initial data.

#### `GetResourceList(data)`

Create a new `GetResourceList` entity instance. Pass `nil` for no initial data.

#### `GraphQl(data)`

Create a new `GraphQl` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GetApiRootEntity

```lua
local get_api_root = client:GetApiRoot(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GetApiRoot():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetApiRootEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GetResourceByIndexEntity

```lua
local get_resource_by_index = client:GetResourceByIndex(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:GetResourceByIndex():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetResourceByIndexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GetResourceListEntity

```lua
local get_resource_list = client:GetResourceList(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:GetResourceList():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetResourceListEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GraphQlEntity

```lua
local graph_ql = client:GraphQl(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `table` | No |  |
| `error` | `table` | No |  |
| `operation_name` | `string` | No |  |
| `query` | `string` | Yes |  |
| `variable` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:GraphQl():create({
  query = --[[ string ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GraphQlEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

