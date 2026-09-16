# DungeonsAndDragons SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module DungeonsAndDragonsFeatures
  def self.make_feature(name)
    case name
    when "base"
      DungeonsAndDragonsBaseFeature.new
    when "ratelimit"
      DungeonsAndDragonsRatelimitFeature.new
    when "retry"
      DungeonsAndDragonsRetryFeature.new
    when "test"
      DungeonsAndDragonsTestFeature.new
    when "timeout"
      DungeonsAndDragonsTimeoutFeature.new
    else
      DungeonsAndDragonsBaseFeature.new
    end
  end
end
