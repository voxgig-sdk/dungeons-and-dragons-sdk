# DungeonsAndDragons SDK



Available for [Golang](go/) and [Lua](lua/) and [PHP](php/) and [Python](py/) and [Ruby](rb/) and [TypeScript](ts/).


## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetApiRoot** |  | `/` |
| **GetResourceByIndex** |  | `/{resource}/{index}` |
| **GetResourceList** |  | `/{resource}` |
| **GraphQl** |  | `/graphql` |

Each entity supports the following operations where available: **load**, **list**, **create**,
**update**, and **remove**.


## Architecture

### Entity-operation model

Every SDK call follows the same pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

At each stage a feature hook fires (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), allowing features to inspect or modify the pipeline.

### Features

Features are hook-based middleware that extend SDK behaviour.

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

You can add custom features by passing them in the `extend` option at
construction time.

### Direct and Prepare

For endpoints not covered by the entity model, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`, `headers`,
and `body`.


## Quick start

### Golang

```go
import sdk "github.com/voxgig-sdk/dungeons-and-dragons-sdk"

client := sdk.NewDungeonsAndDragonsSDK(map[string]any{
    "apikey": os.Getenv("DUNGEONS-AND-DRAGONS_APIKEY"),
})

```

### Lua

```lua
local sdk = require("dungeons-and-dragons_sdk")

local client = sdk.new({
  apikey = os.getenv("DUNGEONS-AND-DRAGONS_APIKEY"),
})


-- Load a specific getapiroot
local getapiroot, err = client:GetApiRoot(nil):load(
  { id = "example_id" }, nil
)
```

### PHP

```php
<?php
require_once 'dungeonsanddragons_sdk.php';

$client = new DungeonsAndDragonsSDK([
    "apikey" => getenv("DUNGEONS-AND-DRAGONS_APIKEY"),
]);


// Load a specific getapiroot
[$getapiroot, $err] = $client->GetApiRoot(null)->load(
    ["id" => "example_id"], null
);
```

### Python

```python
import os
from dungeonsanddragons_sdk import DungeonsAndDragonsSDK

client = DungeonsAndDragonsSDK({
    "apikey": os.environ.get("DUNGEONS-AND-DRAGONS_APIKEY"),
})


# Load a specific getapiroot
getapiroot, err = client.GetApiRoot(None).load(
    {"id": "example_id"}, None
)
```

### Ruby

```ruby
require_relative "DungeonsAndDragons_sdk"

client = DungeonsAndDragonsSDK.new({
  "apikey" => ENV["DUNGEONS-AND-DRAGONS_APIKEY"],
})


# Load a specific getapiroot
getapiroot, err = client.GetApiRoot(nil).load(
  { "id" => "example_id" }, nil
)
```

### TypeScript

```ts
import { DungeonsAndDragonsSDK } from 'dungeons-and-dragons'

const client = new DungeonsAndDragonsSDK({
  apikey: process.env.DUNGEONS-AND-DRAGONS_APIKEY,
})

```


## Testing

Both SDKs provide a test mode that replaces the HTTP transport with an
in-memory mock, so tests run without a network connection.

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetApiRoot(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetApiRoot(nil):load(
  { id = "test01" }, nil
)
```

### PHP

```php
$client = DungeonsAndDragonsSDK::test(null, null);
[$result, $err] = $client->GetApiRoot(null)->load(
    ["id" => "test01"], null
);
```

### Python

```python
client = DungeonsAndDragonsSDK.test(None, None)
result, err = client.GetApiRoot(None).load(
    {"id": "test01"}, None
)
```

### Ruby

```ruby
client = DungeonsAndDragonsSDK.test(nil, nil)
result, err = client.GetApiRoot(nil).load(
  { "id" => "test01" }, nil
)
```

### TypeScript

```ts
const client = DungeonsAndDragonsSDK.test()
const result = await client.GetApiRoot().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```


## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```


## Language-specific documentation

- [Golang SDK](go/README.md)
- [Lua SDK](lua/README.md)
- [PHP SDK](php/README.md)
- [Python SDK](py/README.md)
- [Ruby SDK](rb/README.md)
- [TypeScript SDK](ts/README.md)

