function search ({data = [], max = 100, min = 0, searhNum = 50} = {}) {
  let position = -1
  let intMax = max - 1
  while (true) {
    const cutPoint = parseInt((intMax - min) * (searhNum - data[min]) / (data[intMax] - data[min]) + min)
    if (data[cutPoint] === searhNum) {
      position = cutPoint
      break
    } else if (data[cutPoint] > searhNum) {
      intMax = cutPoint
    } else {
      min = cutPoint
    }
    if (isNaN(intMax) || isNaN(min) || intMax === min || intMax === min + 1) {
      break
    }
  }
  return position
}
exports.search = search
