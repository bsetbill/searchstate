function search ({data = [], max = 100, min = 0, searhNum = 50} = {}) {
  let position = -1
  max = max - 1
  while (true) {
    const cutPoint = parseInt((max - min) * (searhNum - data[min]) / (data[max] - data[min]) + min)
    if (data[cutPoint] === searhNum) {
      position = cutPoint
      break
    } else if (data[cutPoint] > searhNum) {
      max = cutPoint
    } else {
      min = cutPoint
    }
    if (max === min || max === min + 1 || isNaN(max) || isNaN(min)) {
      break
    }
  }
  return position
}
exports.search = search
