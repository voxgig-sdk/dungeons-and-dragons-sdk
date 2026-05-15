-- ProjectName SDK exists test

local sdk = require("dungeons-and-dragons_sdk")

describe("DungeonsAndDragonsSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
