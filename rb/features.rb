# DungeonsAndDragons SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module DungeonsAndDragonsFeatures
  def self.make_feature(name)
    case name
    when "base"
      DungeonsAndDragonsBaseFeature.new
    when "test"
      DungeonsAndDragonsTestFeature.new
    else
      DungeonsAndDragonsBaseFeature.new
    end
  end
end
