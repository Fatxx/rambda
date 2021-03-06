function append (val, arr) {
  if (arr === undefined) {
    return holder => append(val, holder)
  }
  const clone = arr.concat()
  clone.push(val)

  return clone
}

module.exports = append
