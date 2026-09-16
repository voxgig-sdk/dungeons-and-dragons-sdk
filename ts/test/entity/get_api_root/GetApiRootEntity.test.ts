

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


describe('GetApiRootEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsSDK.test()
    const ent = testsdk.GetApiRoot()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'get_api_root.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"abilityscores","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"alignments","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"backgrounds","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"classes","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"conditions","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"damagetypes","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"equipment","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"equipmentcategories","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"feats","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"features","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"key","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"languages","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"magicitems","req":false,"type":"`$STRING`","index$":12},{"active":true,"name":"magicschools","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"monsters","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"proficiencies","req":false,"type":"`$STRING`","index$":15},{"active":true,"name":"races","req":false,"type":"`$STRING`","index$":16},{"active":true,"name":"rules","req":false,"type":"`$STRING`","index$":17},{"active":true,"name":"rulesections","req":false,"type":"`$STRING`","index$":18},{"active":true,"name":"skills","req":false,"type":"`$STRING`","index$":19},{"active":true,"name":"spells","req":false,"type":"`$STRING`","index$":20},{"active":true,"name":"subclasses","req":false,"type":"`$STRING`","index$":21},{"active":true,"name":"subraces","req":false,"type":"`$STRING`","index$":22},{"active":true,"name":"traits","req":false,"type":"`$STRING`","index$":23},{"active":true,"name":"weaponproperties","req":false,"type":"`$STRING`","index$":24}],"name":"get_api_root","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"getApiRoot\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"additionalProperties\":{\"type\":\"string\"},\"example\":{\"ability-scores\":\"/api/ability-scores\",\"alignments\":\"/api/alignments\",\"backgrounds\":\"/api/backgrounds\",\"classes\":\"/api/classes\",\"conditions\":\"/api/conditions\",\"damage-types\":\"/api/damage-types\",\"equipment\":\"/api/equipment\",\"equipment-categories\":\"/api/equipment-categories\",\"feats\":\"/api/feats\",\"features\":\"/api/features\",\"languages\":\"/api/languages\",\"magic-items\":\"/api/magic-items\",\"magic-schools\":\"/api/magic-schools\",\"monsters\":\"/api/monsters\",\"proficiencies\":\"/api/proficiencies\",\"races\":\"/api/races\",\"rule-sections\":\"/api/rule-sections\",\"rules\":\"/api/rules\",\"skills\":\"/api/skills\",\"spells\":\"/api/spells\",\"subclasses\":\"/api/subclasses\",\"subraces\":\"/api/subraces\",\"traits\":\"/api/traits\",\"weapon-properties\":\"/api/weapon-properties\"},\"type\":\"object\"}}},\"description\":\"Successful response with list of available endpoints\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"get_api_root","name__orig":"get_api_root","Name":"GetApiRoot","name_":"get_api_root","name-":"get-api-root","NAME":"GET_API_ROOT","index$":0}, {"active":true,"entity":"get_api_root","key$":"BasicGetApiRootFlow","kind":"basic","name":"BasicGetApiRootFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"get_api_root_ref01","srcdatavar":"get_api_root_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-get_api_root_ref01"}}],"index$":0}]}, 'GetApiRoot')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let get_api_root_ref01_data = Object.values(setup.data.existing.get_api_root)[0] as any

    // LOAD
    const get_api_root_ref01_ent = client.GetApiRoot()
    const get_api_root_ref01_match_dt0: any = {}
    const get_api_root_ref01_data_dt0 = (await get_api_root_ref01_ent.load(get_api_root_ref01_match_dt0)).data()
    assert(null != get_api_root_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/get_api_root/GetApiRootTestData.json')

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
    ['get_api_root01','get_api_root02','get_api_root03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TEST_GET_API_ROOT_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TEST_GET_API_ROOT_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TEST_GET_API_ROOT_ENTID']
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
  
