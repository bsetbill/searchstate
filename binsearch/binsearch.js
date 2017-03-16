function search ({data = [], max = 100, min = 0, searhNum = 50} = {}) {
  let position = -1
  while (true) {
    const cutPoint = parseInt((max + min) / 2)
    if (data[cutPoint] === searhNum) {
      position = cutPoint
      break
    } else if (data[cutPoint] > searhNum) {
      max = cutPoint
    } else {
      min = cutPoint
    }
    if (max === min || max === min + 1) {
      break
    }
  }
  return position
}
exports.search = search
