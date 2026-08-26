# DungeonsAndDragons Golang SDK



The Golang SDK for the DungeonsAndDragons API — an entity-oriented client using standard Go conventions. No generics required; data flows as `map[string]any`.

It exposes the API as capitalised, semantic **Entities** — e.g. `client.GetApiRoot(nil)` — each with the same small set of operations (`List`, `Load`, `Create`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Also generated from this model: `go-cli`, `go-mcp`, `lua`, `php`, `py`, `rb`, `ts` — see
> the [top-level README](../README.md).


## Install
```bash
go get github.com/voxgig-sdk/dungeons-and-dragons-sdk/go@latest
```

The Go module proxy resolves the version from the `go/vX.Y.Z` GitHub
release tag — see [Releases](https://github.com/voxgig-sdk/dungeons-and-dragons-sdk/releases) for the available versions.

To vendor from a local checkout instead, clone this repo alongside your
project and add a `replace` directive pointing at the checked-out
`go/` directory:

```bash
go mod edit -replace github.com/voxgig-sdk/dungeons-and-dragons-sdk/go=../dungeons-and-dragons-sdk/go
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### Quickstart

A complete program: create a client, then call the entity operations.
Each operation returns `(value, error)` — the value is the data itself
(there is no `{ok, data}` wrapper), so check `err` and use the value
directly.

```go
package main

import (
    "fmt"
    sdk "github.com/voxgig-sdk/dungeons-and-dragons-sdk/go"
)

func main() {
    client := sdk.New()

    // Load a single getApiRoot — the value is the loaded record.
    getApiRoot, err := client.GetApiRoot(nil).Load(nil, nil)
    if err != nil {
        panic(err)
    }
    fmt.Println(getApiRoot)
}
```


## Error handling

Every entity operation returns `(value, error)`. Check `err` before
using the value — there is no exception to catch:

```go
getresourcelists, err := client.GetResourceList(nil).List(nil, nil)
if err != nil {
    // handle err
    return
}
_ = getresourcelists
```

`Direct` follows the same `(value, error)` convention:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example_id"},
})
if err != nil {
    // handle err
}
_ = result
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

if result["ok"] == true {
    fmt.Println(result["status"]) // 200
    fmt.Println(result["data"])   // response body
}
```

### Prepare a request without sending it

```go
fetchdef, err := client.Prepare(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "DELETE",
    "params": map[string]any{"id": "example"},
})
if err != nil {
    panic(err)
}

fmt.Println(fetchdef["url"])
fmt.Println(fetchdef["method"])
fmt.Println(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```go
client := sdk.Test()

getResourceList, err := client.GetResourceList(nil).List(
    nil, nil,
)
if err != nil {
    panic(err)
}
fmt.Println(getResourceList) // the returned mock data
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```go
mockFetch := func(url string, init map[string]any) (map[string]any, error) {
    return map[string]any{
        "status":     200,
        "statusText": "OK",
        "headers":    map[string]any{},
        "json": (func() any)(func() any {
            return map[string]any{"id": "mock01"}
        }),
    }, nil
}

client := sdk.NewDungeonsAndDragonsSDK(map[string]any{
    "base": "http://localhost:8080",
    "system": map[string]any{
        "fetch": (func(string, map[string]any) (map[string]any, error))(mockFetch),
    },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
DUNGEONS_AND_DRAGONS_TEST_LIVE=TRUE
```

Then run:

```bash
cd go && go test ./test/...
```


## Reference

### NewDungeonsAndDragonsSDK

```go
func NewDungeonsAndDragonsSDK(options map[string]any) *DungeonsAndDragonsSDK
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `"base"` | `string` | Base URL of the API server. |
| `"prefix"` | `string` | URL path prefix prepended to all requests. |
| `"suffix"` | `string` | URL path suffix appended to all requests. |
| `"feature"` | `map[string]any` | Feature activation flags. |
| `"extend"` | `[]any` | Additional Feature instances to load. |
| `"system"` | `map[string]any` | System overrides (e.g. custom `"fetch"` function). |

### TestSDK

```go
func TestSDK(testopts map[string]any, sdkopts map[string]any) *DungeonsAndDragonsSDK
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### DungeonsAndDragonsSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `OptionsMap` | `() map[string]any` | Deep copy of current SDK options. |
| `GetUtility` | `() *Utility` | Copy of the SDK utility object. |
| `Prepare` | `(fetchargs map[string]any) (map[string]any, error)` | Build an HTTP request definition without sending. |
| `Direct` | `(fetchargs map[string]any) (map[string]any, error)` | Build and send an HTTP request. |
| `GetApiRoot` | `(data map[string]any) DungeonsAndDragonsEntity` | Create a GetApiRoot entity instance. |
| `GetResourceByIndex` | `(data map[string]any) DungeonsAndDragonsEntity` | Create a GetResourceByIndex entity instance. |
| `GetResourceList` | `(data map[string]any) DungeonsAndDragonsEntity` | Create a GetResourceList entity instance. |
| `GraphQl` | `(data map[string]any) DungeonsAndDragonsEntity` | Create a GraphQl entity instance. |

### Entity interface (DungeonsAndDragonsEntity)

All entities implement the `DungeonsAndDragonsEntity` interface.

| Method | Signature | Description |
| --- | --- | --- |
| `Load` | `(reqmatch, ctrl map[string]any) (any, error)` | Load a single entity by match criteria. |
| `List` | `(reqmatch, ctrl map[string]any) (any, error)` | List entities matching the criteria. |
| `Create` | `(reqdata, ctrl map[string]any) (any, error)` | Create a new entity. |
| `Data` | `(args ...any) any` | Get or set entity data. |
| `Match` | `(args ...any) any` | Get or set entity match criteria. |
| `Make` | `() Entity` | Create a new instance with the same options. |
| `GetName` | `() string` | Return the entity name. |

### Result shape

Entity operations return `(value, error)`. The `value` is the
operation's data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `Load` / `Create` | the entity record (`map[string]any`) |
| `List` | a `[]any` of entity records |

Check `err` first, then use the value directly (or the typed
`...Typed` variants, which return the entity's model struct and a typed
slice):

    getApiRoot, err := client.GetApiRoot(nil).Load(nil, nil)
    if err != nil { /* handle */ }
    // getApiRoot is the returned record

Only `Direct()` returns a response envelope — a `map[string]any` with
`"ok"`, `"status"`, `"headers"`, and `"data"` keys.

### Entities

#### GetApiRoot

| Field | Description |
| --- | --- |
| `"abilityscores"` |  |
| `"alignments"` |  |
| `"backgrounds"` |  |
| `"classes"` |  |
| `"conditions"` |  |
| `"damagetypes"` |  |
| `"equipment"` |  |
| `"equipmentcategories"` |  |
| `"feats"` |  |
| `"features"` |  |
| `"key"` |  |
| `"languages"` |  |
| `"magicitems"` |  |
| `"magicschools"` |  |
| `"monsters"` |  |
| `"proficiencies"` |  |
| `"races"` |  |
| `"rules"` |  |
| `"rulesections"` |  |
| `"skills"` |  |
| `"spells"` |  |
| `"subclasses"` |  |
| `"subraces"` |  |
| `"traits"` |  |
| `"weaponproperties"` |  |

Operations: Load.

API path: `/`

#### GetResourceByIndex

| Field | Description |
| --- | --- |
| `"index"` |  |
| `"name"` |  |
| `"url"` |  |

Operations: Load.

API path: `/{resource}/{index}`

#### GetResourceList

| Field | Description |
| --- | --- |
| `"id"` |  |
| `"index"` | Resource index for URL purposes |
| `"name"` | Name of the resource |
| `"url"` | URL of the resource |

Operations: List.

API path: `/{resource}`

#### GraphQl

| Field | Description |
| --- | --- |
| `"data"` | Query results |
| `"errors"` | Any errors that occurred |
| `"operationName"` | Optional operation name if multiple operations in query |
| `"query"` | GraphQL query string |
| `"variables"` | Optional variables for the query |

Operations: Create.

API path: `/graphql`



## Entities


### GetApiRoot

Create an instance: `getApiRoot := client.GetApiRoot(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `abilityscores` | `string` |  |
| `alignments` | `string` |  |
| `backgrounds` | `string` |  |
| `classes` | `string` |  |
| `conditions` | `string` |  |
| `damagetypes` | `string` |  |
| `equipment` | `string` |  |
| `equipmentcategories` | `string` |  |
| `feats` | `string` |  |
| `features` | `string` |  |
| `key` | `string` |  |
| `languages` | `string` |  |
| `magicitems` | `string` |  |
| `magicschools` | `string` |  |
| `monsters` | `string` |  |
| `proficiencies` | `string` |  |
| `races` | `string` |  |
| `rules` | `string` |  |
| `rulesections` | `string` |  |
| `skills` | `string` |  |
| `spells` | `string` |  |
| `subclasses` | `string` |  |
| `subraces` | `string` |  |
| `traits` | `string` |  |
| `weaponproperties` | `string` |  |

#### Example: Load

```go
getApiRoot, err := client.GetApiRoot(nil).Load(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(getApiRoot) // the loaded record
```


### GetResourceByIndex

Create an instance: `getResourceByIndex := client.GetResourceByIndex(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Load(match, ctrl)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `index` | `string` |  |
| `name` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```go
getResourceByIndex, err := client.GetResourceByIndex(nil).Load(map[string]any{"index": "index", "resource": "resource"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(getResourceByIndex) // the loaded record
```


### GetResourceList

Create an instance: `getResourceList := client.GetResourceList(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `List(match, ctrl)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `id` | `string` |  |
| `index` | `string` | Resource index for URL purposes |
| `name` | `string` | Name of the resource |
| `url` | `string` | URL of the resource |

#### Example: List

```go
getResourceLists, err := client.GetResourceList(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(getResourceLists) // the array of records
```


### GraphQl

Create an instance: `graphQl := client.GraphQl(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `Create(data, ctrl)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `data` | `map[string]any` | Query results |
| `errors` | `[]any` | Any errors that occurred |
| `operationName` | `string` | Optional operation name if multiple operations in query |
| `query` | `string` | GraphQL query string |
| `variables` | `map[string]any` | Optional variables for the query |

#### Example: Create

```go
result, err := client.GraphQl(nil).Create(map[string]any{
    "query": "example_query",
}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature implements the
`Feature` interface and provides hooks — functions keyed by pipeline
stage names.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as maps

The Go SDK uses `map[string]any` throughout rather than typed structs.
This mirrors the dynamic nature of the API and keeps the SDK
flexible — no code generation is needed when the API schema changes.

Use `core.ToMapAny()` to safely cast results and nested data.

### Package structure

```
github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/
├── dungeons-and-dragons.go        # Root package — type aliases and constructors
├── core/               # SDK core — client, types, pipeline
├── entity/             # Entity implementations
├── feature/            # Built-in features (Base, Test, Log)
├── utility/            # Utility functions and struct library
└── test/               # Test suites
```

The root package (`github.com/voxgig-sdk/dungeons-and-dragons-sdk/go`) re-exports everything needed
for normal use. Import sub-packages only when you need specific types
like `core.ToMapAny`.

### Entity state

Entity instances are stateful. After a successful `List`, the entity
stores the returned data and match criteria internally.

```go
getresourcelist := client.GetResourceList(nil)
getresourcelist.List(nil, nil)

// getresourcelist.Data() now returns the getresourcelist data from the last list
// getresourcelist.Match() returns the last match criteria
```

Call `Make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`Direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `Prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
