# DungeonsAndDragons Python SDK Reference

Complete API reference for the DungeonsAndDragons Python SDK.


## DungeonsAndDragonsSDK

### Constructor

```python
from dungeonsanddragons_sdk import DungeonsAndDragonsSDK

client = DungeonsAndDragonsSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
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

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GetApiRootEntity

```python
get_api_root = client.GetApiRoot()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ability_score` | `str` | No |  |
| `alignment` | `str` | No |  |
| `background` | `str` | No |  |
| `class` | `str` | No |  |
| `condition` | `str` | No |  |
| `damage_type` | `str` | No |  |
| `equipment` | `str` | No |  |
| `equipment_category` | `str` | No |  |
| `feat` | `str` | No |  |
| `feature` | `str` | No |  |
| `key` | `str` | No |  |
| `language` | `str` | No |  |
| `magic_item` | `str` | No |  |
| `magic_school` | `str` | No |  |
| `monster` | `str` | No |  |
| `proficiency` | `str` | No |  |
| `race` | `str` | No |  |
| `rule` | `str` | No |  |
| `rule_section` | `str` | No |  |
| `skill` | `str` | No |  |
| `spell` | `str` | No |  |
| `subclass` | `str` | No |  |
| `subrace` | `str` | No |  |
| `trait` | `str` | No |  |
| `weapon_property` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GetApiRoot().load()
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
| `index` | `str` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.GetResourceByIndex().load()
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
| `index` | `str` | No |  |
| `name` | `str` | No |  |
| `url` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.GetResourceList().list()
for get_resource_list in results:
    print(get_resource_list)
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
| `data` | `dict` | No |  |
| `error` | `list` | No |  |
| `operation_name` | `str` | No |  |
| `query` | `str` | Yes |  |
| `variable` | `dict` | No |  |

### Operations

#### `create(reqdata, ctrl=None) -> dict`

Create a new entity with the given data. Returns the created entity data and raises on error.

```python
result = client.GraphQl().create({
    "query": "example",  # str
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

