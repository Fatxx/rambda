function pick(keys, obj) {
  if (obj === undefined) {
    return holder => pick(keys, holder)
  }
  const willReturn = {}
  let counter = 0
  while (counter < keys.length) {
    if (keys[ counter ] in obj) {
      willReturn[ keys[ counter ] ] = obj[ keys[ counter ] ]
    }
    counter++
  }

  return willReturn
}

module.exports = pick
