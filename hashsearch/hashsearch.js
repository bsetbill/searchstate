function hash ({data = [], divisor = 23} = {}) {
  const hashData = []
  let remainder = 0
  for (let i = 0; i < data.length; i++) {
    remainder = data[i] % divisor
    if (hashData[remainder] === undefined) {
      hashData[remainder] = data[i]
    } else {
      for (let j = remainder; j < data.length; j++) {
        if (hashData[j] === undefined) {
          hashData[j] = data[i]
          break
        }
      }
    }
  }
  return hashData
}
function search ({data = [], searhNum = 50, divisor = 23} = {}) {
  let position = -1
  let remainder = searhNum % divisor
  while (true) {
    if (data[remainder] === searhNum) {
      position = remainder
      break
    } else {
      remainder++
    }
    if (remainder === data.length) {
      break
    }
  }
  return position
}
exports.search = search
exports.hash = hash
