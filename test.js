const testseq = require('./seqsearch/seqsearch')
const testbin = require('./binsearch/binsearch')
const testitp = require('./itpsearch/itpsearch')
const testhash = require('./hashsearch/hashsearch')
const testtree = require('./treesearch/treesearch')
function random ({min = 0, max = 100, arrSize = 100} = {}) {
  const data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = Math.floor(Math.random() * (max - min + 1)) + min
  }
  return data
}
function sorted ({arrSize = 100} = {}) {
  const data = []
  for (let i = 0; i < arrSize; i++) {
    data[i] = i + 1
  }
  return data
}
function getTree ({data = [], tree = null, max = 100, min = 0} = {}) {
  for (let i = 0; i < data.legth; i++) {
    const key = Math.floor(Math.random() * (max - min + 1)) + min
    tree.insert(key)
  }
  return tree
}
function main () {
  const MAX = 100
  const MIN = 0
  const ARRSIZE = 100
  const SRHNUM = 50
  const DIVISOR = 23
  const data = random({min: MIN, max: MAX, arrSize: ARRSIZE})
  const seqResult = testseq.search({data: data, searhNum: SRHNUM})
  console.log(seqResult)
  const sortedData = sorted({arrSize: ARRSIZE})
  const binResult = testbin.search({data: sortedData, max: MAX, min: MIN, searhNum: SRHNUM})
  console.log(binResult)
  const itpResult = testitp.search({data: sortedData, max: MAX, min: MIN, searhNum: SRHNUM})
  console.log(itpResult)
  const hashData = testhash.hash({data: data, divisor: DIVISOR})
  const hashResult = testhash.search({data: hashData, searhNum: SRHNUM, divisor: DIVISOR})
  console.log(hashResult)
  const tree = new testtree.BinaryTree()
  tree.getTree({max: MAX, min: MIN, data: data})
  const treeResult = tree.search({key: SRHNUM})
  console.log(treeResult)
}
main()
