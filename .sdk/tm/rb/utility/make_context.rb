# DungeonsAndDragons SDK utility: make_context
require_relative '../core/context'
module DungeonsAndDragonsUtilities
  MakeContext = ->(ctxmap, basectx) {
    DungeonsAndDragonsContext.new(ctxmap, basectx)
  }
end
