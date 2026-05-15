
import { Context } from './Context'


class DungeonsAndDragonsError extends Error {

  isDungeonsAndDragonsError = true

  sdk = 'DungeonsAndDragons'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  DungeonsAndDragonsError
}

