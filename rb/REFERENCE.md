# DungeonsAndDragons Ruby SDK Reference

Complete API reference for the DungeonsAndDragons Ruby SDK.


## DungeonsAndDragonsSDK

### Constructor

```ruby
require_relative 'DungeonsAndDragons_sdk'

client = DungeonsAndDragonsSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = DungeonsAndDragonsSDK.test
```


### Instance Methods

#### `GetApiRoot(data = nil)`

Create a new `GetApiRoot` entity instance. Pass `nil` for no initial data.

#### `GetResourceByIndex(data = nil)`

Create a new `GetResourceByIndex` entity instance. Pass `nil` for no initial data.

#### `GetResourceList(data = nil)`

Create a new `GetResourceList` entity instance. Pass `nil` for no initial data.

#### `GraphQl(data = nil)`

Create a new `GraphQl` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GetApiRootEntity

```ruby
get_api_root = client.GetApiRoot
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability_score` | `String` | No |  |
| `alignment` | `String` | No |  |
| `background` | `String` | No |  |
| `class` | `String` | No |  |
| `condition` | `String` | No |  |
| `damage_type` | `String` | No |  |
| `equipment` | `String` | No |  |
| `equipment_category` | `String` | No |  |
| `feat` | `String` | No |  |
| `feature` | `String` | No |  |
| `key` | `String` | No |  |
| `language` | `String` | No |  |
| `magic_item` | `String` | No |  |
| `magic_school` | `String` | No |  |
| `monster` | `String` | No |  |
| `proficiency` | `String` | No |  |
| `race` | `String` | No |  |
| `rule` | `String` | No |  |
| `rule_section` | `String` | No |  |
| `skill` | `String` | No |  |
| `spell` | `String` | No |  |
| `subclass` | `String` | No |  |
| `subrace` | `String` | No |  |
| `trait` | `String` | No |  |
| `weapon_property` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetApiRoot.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetApiRootEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GetResourceByIndexEntity

```ruby
get_resource_by_index = client.GetResourceByIndex
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | `String` | No |  |
| `name` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.GetResourceByIndex.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetResourceByIndexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GetResourceListEntity

```ruby
get_resource_list = client.GetResourceList
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | `String` | No |  |
| `name` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.GetResourceList.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GetResourceListEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GraphQlEntity

```ruby
graph_ql = client.GraphQl
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `data` | `Hash` | No |  |
| `error` | `Array` | No |  |
| `operation_name` | `String` | No |  |
| `query` | `String` | Yes |  |
| `variable` | `Hash` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.GraphQl.create({
  "query" => "example", # String
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GraphQlEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = DungeonsAndDragonsSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

