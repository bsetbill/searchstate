function main () {
  const ARRSIZE = 100
  const MAX = 100
  const MIN = 0
  const SRHNUM = 50
  const DIVISOR = 23
  let data = []
  let result = 0
  data = getdata({min: MIN, max: MAX, arrSize: ARRSIZE})
  data = hash({data: data, arrSize: ARRSIZE, divisor: DIVISOR})
  result = search({data: data, max: MAX, srhNum: SRHNUM, divisor: DIVISOR})
  console.log(result)
}
function getdata ({min = 0, max = 100, arrSize = 100} = {}) {
  let data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return data
}
function hash ({data = [], arrSize = 100, divisor = 23} = {}) {
  let hashData = []
  let remainder = 0
  for (let i = 0; i < arrSize; i++) {
    remainder = data[i] % divisor
    if (hashData[remainder] === undefined) {
      hashData[remainder] = data[i]
    } else {
      for (let j = remainder; j < arrSize; j++) {
        if (hashData[j] === undefined) {
          hashData[j] = data[i]
          break
        }
      }
    }
  }
  return hashData
}
function search ({data = [], max = 100, srhNum = 50, divisor = 23} = {}) {
  let position = -1
  let remainder = srhNum % divisor
  console.log(data)
  while (true) {
    if (data[remainder] === srhNum) {
      position = remainder
      break
    } else {
      remainder++
    }
  }
  return position
}

main()
