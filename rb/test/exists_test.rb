# DungeonsAndDragons SDK exists test

require "minitest/autorun"
require_relative "../DungeonsAndDragons_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = DungeonsAndDragonsSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
