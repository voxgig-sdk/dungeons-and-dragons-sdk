

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


describe('GetResourceListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsSDK.test()
    const ent = testsdk.GetResourceList()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_resource_list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"index","req":false,"short":"Resource index for URL purposes","type":"`$STRING`","index$":1},{"active":true,"name":"name","req":false,"short":"Name of the resource","type":"`$STRING`","index$":2},{"active":true,"name":"url","req":false,"short":"URL of the resource","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"get_resource_list","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"resource","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{resource}","json":"{\"operationId\":\"getResourceList\",\"parameters\":[{\"description\":\"The resource type to retrieve (e.g., spells, monsters, classes, equipment)\",\"in\":\"path\",\"name\":\"resource\",\"required\":true,\"schema\":{\"enum\":[\"ability-scores\",\"alignments\",\"backgrounds\",\"classes\",\"conditions\",\"damage-types\",\"equipment\",\"equipment-categories\",\"feats\",\"features\",\"languages\",\"magic-items\",\"magic-schools\",\"monsters\",\"proficiencies\",\"races\",\"rule-sections\",\"rules\",\"skills\",\"spells\",\"subclasses\",\"subraces\",\"traits\",\"weapon-properties\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"count\":{\"description\":\"Total number of results\",\"type\":\"integer\"},\"results\":{\"items\":{\"properties\":{\"index\":{\"description\":\"Resource index for URL purposes\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the resource\",\"type\":\"string\"},\"url\":{\"description\":\"URL of the resource\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with list of resources\"},\"404\":{\"description\":\"Resource type not found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{resource}","rename":{"param":{"resource":"id"}},"segments":[{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.results`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"get_resource_list","name__orig":"get_resource_list","Name":"GetResourceList","name_":"get_resource_list","name-":"get-resource-list","NAME":"GET_RESOURCE_LIST","index$":2}, {"active":true,"entity":"get_resource_list","key$":"BasicGetResourceListFlow","kind":"basic","name":"BasicGetResourceListFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"resource":"resource01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"get_resource_list_ref01"}}],"index$":0}]}, 'GetResourceList')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_resource_list_ref01_data = Object.values(setup.data.existing.get_resource_list)[0] as any

    // LIST
    const get_resource_list_ref01_ent = client.GetResourceList()
    const get_resource_list_ref01_match: any = {}
    get_resource_list_ref01_match['resource'] = setup.idmap['resource01']

    const get_resource_list_ref01_list = (await get_resource_list_ref01_ent.list(get_resource_list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_resource_list/GetResourceListTestData.json')

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
    ['get_resource_list01','get_resource_list02','get_resource_list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_LIST_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_LIST_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TEST_GET_RESOURCE_LIST_ENTID']
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
  
