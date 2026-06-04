# DungeonsAndDragons SDK

Query the Dungeons & Dragons 5e SRD via REST or GraphQL — spells, monsters, classes, races, equipment and more

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Dungeons and Dragons 5e SRD API

The Dungeons & Dragons 5e SRD API is a community-built service maintained by [5e-bits](https://5e-bits.github.io/docs/) that exposes the open System Reference Document for fifth-edition D&D. It is served from `https://www.dnd5eapi.co/api` and can be queried as either a REST API or a GraphQL endpoint.

What you get from the API:

- Character building blocks: ability scores, alignments, backgrounds, classes, races, subraces, subclasses, feats and proficiencies.
- Game mechanics: conditions, damage types, features, skills, traits and rule sections.
- Equipment and items: equipment, equipment categories, magic items and weapon properties.
- Spellcasting: full spell list and magic schools.
- Bestiary and world: monsters, languages and general rules text.

Resources are reachable via predictable index paths such as `/api/spells`, `/api/races/dwarf` or `/api/ability-scores/cha`, and the same data is queryable via GraphQL for shaped responses. No authentication or API key is required, and CORS is enabled so the API can be called directly from browsers.

## Try it

**TypeScript**
```bash
npm install dungeons-and-dragons
```

**Python**
```bash
pip install dungeons-and-dragons-sdk
```

**PHP**
```bash
composer require voxgig/dungeons-and-dragons-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/dungeons-and-dragons-sdk/go
```

**Ruby**
```bash
gem install dungeons-and-dragons-sdk
```

**Lua**
```bash
luarocks install dungeons-and-dragons-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DungeonsAndDragonsSDK } from 'dungeons-and-dragons'

const client = new DungeonsAndDragonsSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o dungeons-and-dragons-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "dungeons-and-dragons": {
      "command": "/abs/path/to/dungeons-and-dragons-mcp"
    }
  }
}
```

## Entities

The API exposes 4 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **GetApiRoot** | Lists the available resource categories exposed by the API at the root path `GET /api`, acting as a discovery endpoint. | `/` |
| **GetResourceByIndex** | Fetches a single SRD resource by its index slug, e.g. `GET /api/spells/fireball` or `GET /api/races/dwarf`. | `/{resource}/{index}` |
| **GetResourceList** | Returns the index list of items within a given resource category, e.g. `GET /api/spells`, `GET /api/monsters` or `GET /api/equipment`. | `/{resource}` |
| **GraphQl** | GraphQL endpoint that mirrors the REST data model and lets you request shaped queries across SRD entities in a single round trip. | `/graphql` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from dungeonsanddragons_sdk import DungeonsAndDragonsSDK

client = DungeonsAndDragonsSDK({})


# Load a specific getapiroot
getapiroot, err = client.GetApiRoot(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'dungeonsanddragons_sdk.php';

$client = new DungeonsAndDragonsSDK([]);


// Load a specific getapiroot
[$getapiroot, $err] = $client->GetApiRoot(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/dungeons-and-dragons-sdk/go"

client := sdk.NewDungeonsAndDragonsSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "DungeonsAndDragons_sdk"

client = DungeonsAndDragonsSDK.new({})


# Load a specific getapiroot
getapiroot, err = client.GetApiRoot(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("dungeons-and-dragons_sdk")

local client = sdk.new({})


-- Load a specific getapiroot
local getapiroot, err = client:GetApiRoot(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DungeonsAndDragonsSDK.test()
const result = await client.GetApiRoot().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DungeonsAndDragonsSDK.test(None, None)
result, err = client.GetApiRoot(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DungeonsAndDragonsSDK::test(null, null);
[$result, $err] = $client->GetApiRoot(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.GetApiRoot(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DungeonsAndDragonsSDK.test(nil, nil)
result, err = client.GetApiRoot(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:GetApiRoot(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
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

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
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

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Dungeons and Dragons 5e SRD API

- Upstream: [https://www.dnd5eapi.co/](https://www.dnd5eapi.co/)
- API docs: [https://5e-bits.github.io/docs/](https://5e-bits.github.io/docs/)

- API content is drawn from the D&D 5e System Reference Document (SRD), distributed under the Open Gaming License (OGL).
- Attribution to Wizards of the Coast and the SRD should accompany derivative works that reuse the content.
- API code and tooling are maintained as open source by the 5e-bits community on GitHub.
- Only SRD-licensed material is exposed; non-SRD content (e.g. books beyond the SRD) is not included.

---

Generated from the Dungeons and Dragons 5e SRD API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
