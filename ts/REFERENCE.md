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

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetApiRoot().load()
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
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.GetResourceByIndex().load({ index: 'index', resource: 'resource' })
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
| `index` | `string` | No |  |
| `name` | `string` | No |  |
| `url` | `string` | No |  |

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
| `data` | `Record<string, any>` | No |  |
| `error` | `any[]` | No |  |
| `operation_name` | `string` | No |  |
| `query` | `string` | Yes |  |
| `variable` | `Record<string, any>` | No |  |

### Operations

#### `create(data: object, ctrl?: object)`

Create a new entity with the given data.

```ts
const result = await client.GraphQl().create({
  query: 'example_query',
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

