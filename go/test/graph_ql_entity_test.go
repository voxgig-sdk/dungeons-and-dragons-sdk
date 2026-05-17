package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/dungeons-and-dragons-sdk/go"
	"github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/core"

	vs "github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/utility/struct"
)

func TestGraphQlEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GraphQl(nil)
		if ent == nil {
			t.Fatal("expected non-nil GraphQlEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := graph_qlBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "graph_ql." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		graphQlRef01Ent := client.GraphQl(nil)
		graphQlRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "graph_ql"}, setup.data), "graph_ql_ref01"))

		graphQlRef01DataResult, err := graphQlRef01Ent.Create(graphQlRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		graphQlRef01Data = core.ToMapAny(graphQlRef01DataResult)
		if graphQlRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

	})
}

func graph_qlBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "graph_ql", "GraphQlTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read graph_ql test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse graph_ql test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"graph_ql01", "graph_ql02", "graph_ql03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID": idmap,
		"DUNGEONSANDDRAGONS_TEST_LIVE":      "FALSE",
		"DUNGEONSANDDRAGONS_TEST_EXPLAIN":   "FALSE",
		"DUNGEONSANDDRAGONS_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["DUNGEONSANDDRAGONS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["DUNGEONSANDDRAGONS_APIKEY"],
			},
			extra,
		})
		client = sdk.NewDungeonsAndDragonsSDK(core.ToMapAny(mergedOpts))
	}

	live := env["DUNGEONSANDDRAGONS_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["DUNGEONSANDDRAGONS_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
