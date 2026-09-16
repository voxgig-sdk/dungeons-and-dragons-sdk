

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { DungeonsAndDragonsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('GetResourceByIndexEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsSDK.test()
    const ent = testsdk.GetResourceByIndex()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_resource_by_index.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"index","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"url","req":false,"type":"`$STRING`","index$":3}],"id":{"field":"id","from":{"index":"index"},"name":"id","parts":["resource","index"],"sep":"/"},"name":"get_resource_by_index","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"index","orig":"index","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"resource","orig":"resource","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /{resource}/{index}","json":"{\"operationId\":\"getResourceByIndex\",\"parameters\":[{\"description\":\"The resource type (e.g., spells, monsters, classes)\",\"in\":\"path\",\"name\":\"resource\",\"required\":true,\"schema\":{\"type\":\"string\"}},{\"description\":\"The index of the specific resource item\",\"in\":\"path\",\"name\":\"index\",\"required\":true,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":true,\"properties\":{\"index\":{\"type\":\"string\"},\"name\":{\"type\":\"string\"},\"url\":{\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with resource details\"},\"404\":{\"description\":\"Resource not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{resource}/{index}","segments":[{"var":"resource"},{"var":"index"}],"select":{"exist":["index","resource"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_resource_by_index","name__orig":"get_resource_by_index","Name":"GetResourceByIndex","name_":"get_resource_by_index","name-":"get-resource-by-index","NAME":"GET_RESOURCE_BY_INDEX","index$":1}, {"active":true,"entity":"get_resource_by_index","key$":"BasicGetResourceByIndexFlow","kind":"basic","name":"BasicGetResourceByIndexFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_resource_by_index_ref01","srcdatavar":"get_resource_by_index_ref01_data","suffix":"_dt0"},"match":{"id":"get_resource_by_index01","resource":"resource01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_resource_by_index_ref01"}}],"index$":0}]}, 'GetResourceByIndex')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_resource_by_index_ref01_data = Object.values(setup.data.existing.get_resource_by_index)[0] as any

    // LOAD
    const get_resource_by_index_ref01_ent = client.GetResourceByIndex()
    const get_resource_by_index_ref01_match_dt0: any = {}
    get_resource_by_index_ref01_match_dt0.id = get_resource_by_index_ref01_data.id
    const get_resource_by_index_ref01_data_dt0 = (await get_resource_by_index_ref01_ent.load(get_resource_by_index_ref01_match_dt0)).data()
    assert(get_resource_by_index_ref01_data_dt0.id === get_resource_by_index_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_resource_by_index/GetResourceByIndexTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = DungeonsAndDragonsSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['get_resource_by_index01','get_resource_by_index02','get_resource_by_index03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_BY_INDEX_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new DungeonsAndDragonsSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
