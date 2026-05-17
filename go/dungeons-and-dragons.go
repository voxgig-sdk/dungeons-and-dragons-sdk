package voxgigdungeonsanddragonssdk

import (
	"github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/core"
	"github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/entity"
	"github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/feature"
	_ "github.com/voxgig-sdk/dungeons-and-dragons-sdk/go/utility"
)

// Type aliases preserve external API.
type DungeonsAndDragonsSDK = core.DungeonsAndDragonsSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type DungeonsAndDragonsEntity = core.DungeonsAndDragonsEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type DungeonsAndDragonsError = core.DungeonsAndDragonsError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewGetApiRootEntityFunc = func(client *core.DungeonsAndDragonsSDK, entopts map[string]any) core.DungeonsAndDragonsEntity {
		return entity.NewGetApiRootEntity(client, entopts)
	}
	core.NewGetResourceByIndexEntityFunc = func(client *core.DungeonsAndDragonsSDK, entopts map[string]any) core.DungeonsAndDragonsEntity {
		return entity.NewGetResourceByIndexEntity(client, entopts)
	}
	core.NewGetResourceListEntityFunc = func(client *core.DungeonsAndDragonsSDK, entopts map[string]any) core.DungeonsAndDragonsEntity {
		return entity.NewGetResourceListEntity(client, entopts)
	}
	core.NewGraphQlEntityFunc = func(client *core.DungeonsAndDragonsSDK, entopts map[string]any) core.DungeonsAndDragonsEntity {
		return entity.NewGraphQlEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewDungeonsAndDragonsSDK = core.NewDungeonsAndDragonsSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
