isObject        = require './is/type/object'
defineProperty  = Object.defineProperty

module.exports  = (object, key, value, aOptions)->
  writable = true
  descriptor =
    configurable: true
    enumerable: false
  if aOptions
    descriptor.enumerable = aOptions.enumerable is true
    descriptor.configurable = aOptions.configurable isnt false
    if aOptions.get
      isAccessor = true
      descriptor.get = aOptions.get
    if aOptions.set
      isAccessor = true
      descriptor.set = aOptions.set
    writable = aOptions.writable isnt false
  if not isAccessor
    descriptor.writable = writable
    descriptor.value = value
  defineProperty object, key, descriptor

