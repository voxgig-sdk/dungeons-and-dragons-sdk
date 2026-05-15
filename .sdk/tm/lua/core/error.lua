-- DungeonsAndDragons SDK error

local DungeonsAndDragonsError = {}
DungeonsAndDragonsError.__index = DungeonsAndDragonsError


function DungeonsAndDragonsError.new(code, msg, ctx)
  local self = setmetatable({}, DungeonsAndDragonsError)
  self.is_sdk_error = true
  self.sdk = "DungeonsAndDragons"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function DungeonsAndDragonsError:error()
  return self.msg
end


function DungeonsAndDragonsError:__tostring()
  return self.msg
end


return DungeonsAndDragonsError
