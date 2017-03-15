function main () {
  const ARRSIZE = 100
  const MAX = 100
  const MIN = 0
  const SRHNUM = 90
  let data = []
  let result = 0
  data = getdata({arrSize: ARRSIZE})
  result = search({data: data, max: MAX, min: MIN, srhNum: SRHNUM})
  console.log(result)
}
function getdata ({arrSize = 100} = {}) {
  let data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = i + 1
  }
  return data
}
function search ({data = [], max = 100, min = 0, srhNum = 50} = {}) {
  let position = -1
  max = max - 1
  while (true) {
    let cutPoint = parseInt((max - min) * (srhNum - data[min]) / (data[max] - data[min]) + min)
    if (data[cutPoint] === srhNum) {
      position = cutPoint
      break
    } else if (data[cutPoint] > srhNum) {
      max = cutPoint
    } else {
      min = cutPoint
    }
  }
  return position
}

main()
