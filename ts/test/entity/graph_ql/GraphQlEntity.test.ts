

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


describe('GraphQlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONS_AND_DRAGONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONS_AND_DRAGONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsSDK.test()
    const ent = testsdk.GraphQl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'graph_ql.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"Query results","type":"`$OBJECT`","index$":0},{"active":true,"name":"errors","req":false,"short":"Any errors that occurred","type":"`$ARRAY`","index$":1},{"active":true,"name":"operationName","req":false,"short":"Optional operation name if multiple operations in query","type":"`$STRING`","index$":2},{"active":true,"name":"query","req":true,"short":"GraphQL query string","type":"`$STRING`","index$":3},{"active":true,"name":"variables","req":false,"short":"Optional variables for the query","type":"`$OBJECT`","index$":4}],"name":"graph_ql","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{},"contract":{"id":"POST /graphql","json":"{\"operationId\":\"graphqlQuery\",\"parameters\":[],\"protocol\":\"http\",\"requestBody\":{\"content\":{\"application/json\":{\"example\":{\"query\":\"query { spell(index: \\\"fireball\\\") { name level school { name } } }\"},\"schema\":{\"properties\":{\"operationName\":{\"description\":\"Optional operation name if multiple operations in query\",\"type\":\"string\"},\"query\":{\"description\":\"GraphQL query string\",\"type\":\"string\"},\"variables\":{\"description\":\"Optional variables for the query\",\"type\":\"object\"}},\"required\":[\"query\"],\"type\":\"object\"}}},\"required\":true},\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"Query results\",\"type\":\"object\"},\"errors\":{\"description\":\"Any errors that occurred\",\"items\":{\"properties\":{\"locations\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"message\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful GraphQL response\"},\"400\":{\"description\":\"Bad request - invalid GraphQL query\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"POST","orig":"/graphql","segments":[{"lit":"graphql"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"graph_ql","name__orig":"graph_ql","Name":"GraphQl","name_":"graph_ql","name-":"graph-ql","NAME":"GRAPH_QL","index$":3}, {"active":true,"entity":"graph_ql","key$":"BasicGraphQlFlow","kind":"basic","name":"BasicGraphQlFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"graph_ql_ref01"},"match":{},"op":"create","spec":[],"valid":[],"index$":0}]}, 'GraphQl')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const graph_ql_ref01_ent = client.GraphQl()
    let graph_ql_ref01_data = setup.data.new.graph_ql['graph_ql_ref01']

    graph_ql_ref01_data = (await graph_ql_ref01_ent.create(graph_ql_ref01_data)).data()
    assert(null != graph_ql_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/graph_ql/GraphQlTestData.json')

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
    ['graph_ql01','graph_ql02','graph_ql03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID']
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
  
