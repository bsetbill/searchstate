function search ({data = [], searhNum = 50} = {}) {
  let act = -1
  for (let i = 0; i < data.length; i++) {
    if (data[i] === searhNum) {
      act = i
      break
    }
  }
  return act
}
exports.search = search
