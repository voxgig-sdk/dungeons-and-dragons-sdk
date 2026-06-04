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

func TestGetResourceByIndexEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.GetResourceByIndex(nil)
		if ent == nil {
			t.Fatal("expected non-nil GetResourceByIndexEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := get_resource_by_indexBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "get_resource_by_index." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		getResourceByIndexRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.get_resource_by_index", setup.data)))
		var getResourceByIndexRef01Data map[string]any
		if len(getResourceByIndexRef01DataRaw) > 0 {
			getResourceByIndexRef01Data = core.ToMapAny(getResourceByIndexRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = getResourceByIndexRef01Data

		// LOAD
		getResourceByIndexRef01Ent := client.GetResourceByIndex(nil)
		getResourceByIndexRef01MatchDt0 := map[string]any{}
		getResourceByIndexRef01DataDt0Loaded, err := getResourceByIndexRef01Ent.Load(getResourceByIndexRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if getResourceByIndexRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func get_resource_by_indexBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "get_resource_by_index", "GetResourceByIndexTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read get_resource_by_index test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse get_resource_by_index test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"get_resource_by_index01", "get_resource_by_index02", "get_resource_by_index03", "resource01"},
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
	entidEnvRaw := os.Getenv("DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID": idmap,
		"DUNGEONSANDDRAGONS_TEST_LIVE":      "FALSE",
		"DUNGEONSANDDRAGONS_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["DUNGEONSANDDRAGONS_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
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
