package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewGetApiRootEntityFunc func(client *DungeonsAndDragonsSDK, entopts map[string]any) DungeonsAndDragonsEntity

var NewGetResourceByIndexEntityFunc func(client *DungeonsAndDragonsSDK, entopts map[string]any) DungeonsAndDragonsEntity

var NewGetResourceListEntityFunc func(client *DungeonsAndDragonsSDK, entopts map[string]any) DungeonsAndDragonsEntity

var NewGraphQlEntityFunc func(client *DungeonsAndDragonsSDK, entopts map[string]any) DungeonsAndDragonsEntity

