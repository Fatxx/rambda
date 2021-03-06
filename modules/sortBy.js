function sortBy(fn, arr) {
  if (arr === undefined) {
    return holder => sortBy(fn, holder)
  }
  const arrClone = arr.concat()

  return arrClone.sort((a, b) => {
    const fnA = fn(a)
    const fnB = fn(b)
    return fnA < fnB ?
      -1 :
      fnA > fnB ?
        1 :
        0
  })
}

module.exports = sortBy
