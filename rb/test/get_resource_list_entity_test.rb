# GetResourceList entity test

require "minitest/autorun"
require "json"
require_relative "../DungeonsAndDragons_sdk"
require_relative "runner"

class GetResourceListEntityTest < Minitest::Test
  def test_create_instance
    testsdk = DungeonsAndDragonsSDK.test(nil, nil)
    ent = testsdk.GetResourceList(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = get_resource_list_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "get_resource_list." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_LIST_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    get_resource_list_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.get_resource_list")))
    get_resource_list_ref01_data = nil
    if get_resource_list_ref01_data_raw.length > 0
      get_resource_list_ref01_data = Helpers.to_map(get_resource_list_ref01_data_raw[0][1])
    end

    # LIST
    get_resource_list_ref01_ent = client.GetResourceList(nil)
    get_resource_list_ref01_match = {
      "resource" => setup[:idmap]["resource01"],
    }

    get_resource_list_ref01_list_result = get_resource_list_ref01_ent.list(get_resource_list_ref01_match, nil)
    assert get_resource_list_ref01_list_result.is_a?(Array)

  end
end

def get_resource_list_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "get_resource_list", "GetResourceListTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = DungeonsAndDragonsSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["get_resource_list01", "get_resource_list02", "get_resource_list03", "resource01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_LIST_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_LIST_ENTID" => idmap,
    "DUNGEONSANDDRAGONS_TEST_LIVE" => "FALSE",
    "DUNGEONSANDDRAGONS_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["DUNGEONSANDDRAGONS_TEST_GET_RESOURCE_LIST_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["DUNGEONSANDDRAGONS_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = DungeonsAndDragonsSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["DUNGEONSANDDRAGONS_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["DUNGEONSANDDRAGONS_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
