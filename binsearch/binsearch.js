function main () {
  const ARRSIZE = 100
  const MAX = 100
  const MIN = 0
  const SRHNUM = 50
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
  let cutpoint = parseInt((max + min) / 2)
  while (true) {
    if (data[cutpoint] === srhNum) {
      position = cutpoint
      break
    } else if (data[cutpoint] > srhNum) {
      max = cutpoint
    } else {
      min = cutpoint
    }
    cutpoint = parseInt((max + min) / 2)
  }
  return position
}

main()
