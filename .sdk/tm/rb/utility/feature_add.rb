# DungeonsAndDragons SDK utility: feature_add
module DungeonsAndDragonsUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
