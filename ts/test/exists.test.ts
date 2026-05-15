
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { DungeonsAndDragonsSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await DungeonsAndDragonsSDK.test()
    equal(null !== testsdk, true)
  })

})
