function main () {
  let tree = new binaryTree()
  const MAX = 100
  const MIN = 0
  const TREESIZE = 100
  tree.insert({max: MAX, min: MIN, treeSize: TREESIZE})
  let result = tree.search(50)
  console.log(result)
}
function binaryTree () {
  const NODE = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  this.search = function (key) {
    return searchNode(root, key)
  }
  const searchNode = function (node, key) {
    if (node === null) {
      return -1
    }
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return 0
    }
  }
  this.insert = function ({max = 100, min = 0, treeSize = 100} = {}) {
    for (let i = 0; i < treeSize; i++) {
      let key = Math.floor(Math.random() * (max - min + 1)) + min
      let newNode = new NODE(key)
      if (root === null) {
        root = newNode
      } else {
        insertNode(root, newNode)
      }
    }
  }
  const insertNode = function (node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }
}
main()