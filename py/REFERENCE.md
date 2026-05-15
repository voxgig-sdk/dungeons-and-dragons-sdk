# DungeonsAndDragons Python SDK Reference

Complete API reference for the DungeonsAndDragons Python SDK.


## DungeonsAndDragonsSDK

### Constructor

```python
from dungeons-and-dragons_sdk import DungeonsAndDragonsSDK

client = DungeonsAndDragonsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["apikey"]` | `str` | API key for authentication. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = DungeonsAndDragonsSDK.test()
```


### Instance Methods

#### `GetApiRoot(data=None)`

Create a new `GetApiRootEntity` instance. Pass `None` for no initial data.

#### `GetResourceByIndex(data=None)`

Create a new `GetResourceByIndexEntity` instance. Pass `None` for no initial data.

#### `GetResourceList(data=None)`

Create a new `GetResourceListEntity` instance. Pass `None` for no initial data.

#### `GraphQl(data=None)`

Create a new `GraphQlEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> tuple`

Make a direct HTTP request to any API endpoint. Returns `(result, err)`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `(result_dict, err)`

#### `prepare(fetchargs=None) -> tuple`

Prepare a fetch definition without sending. Returns `(fetchdef, err)`.


---

## GetApiRootEntity

```python
get_api_root = client.GetApiRoot()
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

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.GetApiRoot().load({"id": "get_api_root_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetApiRootEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GetResourceByIndexEntity

```python
get_resource_by_index = client.GetResourceByIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> tuple`

Load a single entity matching the given criteria.

```python
result, err = client.GetResourceByIndex().load({"id": "get_resource_by_index_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetResourceByIndexEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GetResourceListEntity

```python
get_resource_list = client.GetResourceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl=None) -> tuple`

List entities matching the given criteria. Returns an array.

```python
results, err = client.GetResourceList().list({})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GetResourceListEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## GraphQlEntity

```python
graph_ql = client.GraphQl()
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

#### `create(reqdata, ctrl=None) -> tuple`

Create a new entity with the given data.

```python
result, err = client.GraphQl().create({
    "query": # `$STRING`,
})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GraphQlEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = DungeonsAndDragonsSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

