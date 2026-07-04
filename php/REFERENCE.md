# DungeonsAndDragons PHP SDK Reference

Complete API reference for the DungeonsAndDragons PHP SDK.


## DungeonsAndDragonsSDK

### Constructor

```php
require_once __DIR__ . '/dungeons-and-dragons_sdk.php';

$client = new DungeonsAndDragonsSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `DungeonsAndDragonsSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = DungeonsAndDragonsSDK::test();
```


### Instance Methods

#### `GetApiRoot($data = null)`

Create a new `GetApiRootEntity` instance. Pass `null` for no initial data.

#### `GetResourceByIndex($data = null)`

Create a new `GetResourceByIndexEntity` instance. Pass `null` for no initial data.

#### `GetResourceList($data = null)`

Create a new `GetResourceListEntity` instance. Pass `null` for no initial data.

#### `GraphQl($data = null)`

Create a new `GraphQlEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GetApiRootEntity

```php
$get_api_root = $client->GetApiRoot();
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

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GetApiRoot()->load(["id" => "get_api_root_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetApiRootEntity`

Create a new `GetApiRootEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GetResourceByIndexEntity

```php
$get_resource_by_index = $client->GetResourceByIndex();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->GetResourceByIndex()->load(["id" => "get_resource_by_index_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetResourceByIndexEntity`

Create a new `GetResourceByIndexEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GetResourceListEntity

```php
$get_resource_list = $client->GetResourceList();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `index` | ``$STRING`` | No |  |
| `name` | ``$STRING`` | No |  |
| `url` | ``$STRING`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): mixed`

List entities matching the given criteria. Returns an array. Throws on error.

```php
$results = $client->GetResourceList()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GetResourceListEntity`

Create a new `GetResourceListEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## GraphQlEntity

```php
$graph_ql = $client->GraphQl();
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

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->GraphQl()->create([
  "query" => /* `$STRING` */,
]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): GraphQlEntity`

Create a new `GraphQlEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new DungeonsAndDragonsSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

