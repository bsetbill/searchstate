function BinaryTree () {
  const NODE = function (key) {
    this.key = key
    this.left = null
    this.right = null
  }
  let root = null
  this.search = function ({key = 50} = {}) {
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
  this.getTree = function ({max = 100, min = 0, data = []} = {}) {
    for (let i = 0; i < data.length; i++) {
      const key = data[i]
      insert(key)
    }
  }
  const insert = function (key) {
    let newNode = new NODE(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
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
exports.BinaryTree = BinaryTree
