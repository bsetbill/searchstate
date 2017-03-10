function main () {
  const MAX = 100
  const MIN = 0
  const ARRSIZE = 100
  const SRHNUM = 50
  let data = random({min: MIN, max: MAX, arrSize: ARRSIZE})
  let result = search({data: data, arrize: ARRSIZE, srhNum: SRHNUM})
  console.log(result)
}
function random ({min = 0, max = 100, arrSize = 100} = {}) {
  let data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return data
}

function search ({data = [], srhNum = 50, arrSize = 100} = {}) {
  let act = -1
  for (let i = 0; i < arrSize; i++) {
    if (data[i] === srhNum) {
      act = i
      break
    }
  }
  return act
}
/* function search ({data = [], srhNum = 50, arrSize = 100} = {}) {
  let act = -1
  for (let i in data) {
    if (data[i] === srhNum) {
      act = i
      break
    }
  }
  return act
} */
/* function search ({data = [], srhNum = 50, arrSize = 100} = {}) {
  let act = -1
  data.forEach(function (positionNum, inx, arr) {
    if (positionNum === srhNum) {
      act = inx
      arr.length = 0
    }
  })
  return act
} */

main()
