<?php
declare(strict_types=1);

// GraphQl entity test

require_once __DIR__ . '/../dungeonsanddragons_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GraphQlEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = DungeonsAndDragonsSDK::test(null, null);
        $ent = $testsdk->GraphQl(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = graph_ql_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "graph_ql." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $graph_ql_ref01_ent = $client->GraphQl(null);
        $graph_ql_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.graph_ql"), "graph_ql_ref01"));

        [$graph_ql_ref01_data_result, $err] = $graph_ql_ref01_ent->create($graph_ql_ref01_data, null);
        $this->assertNull($err);
        $graph_ql_ref01_data = Helpers::to_map($graph_ql_ref01_data_result);
        $this->assertNotNull($graph_ql_ref01_data);

    }
}

function graph_ql_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/graph_ql/GraphQlTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = DungeonsAndDragonsSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["graph_ql01", "graph_ql02", "graph_ql03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID" => $idmap,
        "DUNGEONSANDDRAGONS_TEST_LIVE" => "FALSE",
        "DUNGEONSANDDRAGONS_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["DUNGEONSANDDRAGONS_TEST_GRAPH_QL_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["DUNGEONSANDDRAGONS_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new DungeonsAndDragonsSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["DUNGEONSANDDRAGONS_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["DUNGEONSANDDRAGONS_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
