# DungeonsAndDragons TypeScript SDK Reference

Complete API reference for the DungeonsAndDragons TypeScript SDK.


## DungeonsAndDragonsSDK

### Constructor

```ts
new DungeonsAndDragonsSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = DungeonsAndDragonsSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `DungeonsAndDragonsSDK` instance in test mode.


### Instance Methods

#### `GetApiRoot(data?: object)`

Create a new `GetApiRoot` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetApiRootEntity` instance.

#### `GetResourceByIndex(data?: object)`

Create a new `GetResourceByIndex` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetResourceByIndexEntity` instance.

#### `GetResourceList(data?: object)`

Create a new `GetResourceList` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GetResourceListEntity` instance.

#### `GraphQl(data?: object)`

Create a new `GraphQl` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GraphQlEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `DungeonsAndDragonsSDK.test()`.

**Returns:** `DungeonsAndDragonsSDK` instance in test mode.


---

## GetApiRootEntity

```ts
const get_api_root = client.GetApiRoot()
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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetApiRoot().load({ id: 'get_api_root_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetApiRootEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GetResourceByIndexEntity

```ts
const get_resource_by_index = client.GetResourceByIndex()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetResourceByIndex().load({ id: 'get_resource_by_index_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetResourceByIndexEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GetResourceListEntity

```ts
const get_resource_list = client.GetResourceList()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.GetResourceList().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GetResourceListEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## GraphQlEntity

```ts
const graph_ql = client.GraphQl()
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

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GraphQl().create({
  query: /* `$STRING` */,
})
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GraphQlEntity` instance with the same client and
options.

#### `client()`

Return the parent `DungeonsAndDragonsSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new DungeonsAndDragonsSDK({
  feature: {
    test: { active: true },
  }
})
```

