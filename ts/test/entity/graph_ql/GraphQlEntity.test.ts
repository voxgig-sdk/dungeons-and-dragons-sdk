
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { DungeonsAndDragonsSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('GraphQlEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when DUNGEONSANDDRAGONS_TEST_LIVE=TRUE.
  afterEach(liveDelay('DUNGEONSANDDRAGONS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = DungeonsAndDragonsSDK.test()
    const ent = testsdk.GraphQl()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.DUNGEONS_AND_DRAGONS_TEST_LIVE
    for (const op of ['create']) {
      if (maybeSkipControl(t, 'entityOp', 'graph_ql.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const graph_ql_ref01_ent = client.GraphQl()
    let graph_ql_ref01_data = setup.data.new.graph_ql['graph_ql_ref01']

    graph_ql_ref01_data = await graph_ql_ref01_ent.create(graph_ql_ref01_data)
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

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID': idmap,
    'DUNGEONS_AND_DRAGONS_TEST_LIVE': 'FALSE',
    'DUNGEONS_AND_DRAGONS_TEST_EXPLAIN': 'FALSE',
    'DUNGEONS_AND_DRAGONS_APIKEY': 'NONE',
  })

  idmap = env['DUNGEONS_AND_DRAGONS_TEST_GRAPH_QL_ENTID']

  const live = 'TRUE' === env.DUNGEONS_AND_DRAGONS_TEST_LIVE

  if (live) {
    client = new DungeonsAndDragonsSDK(merge([
      {
        apikey: env.DUNGEONS_AND_DRAGONS_APIKEY,
      },
      extra
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
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
