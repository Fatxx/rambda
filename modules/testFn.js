function test(regex, str){
  if (str === undefined) {
    return holder => test(regex, holder)
  }

  return str.search(regex) === -1 ?
    false :
    true
}

module.exports = test
