const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() { this._root = null; }

  root() { return this._root; }

  add(data) {
    const node = new Node(data);
    if (this._root === null) { this._root = node; return; }
    let current = this._root;
    while (true) {
      if (data === current.data) return;
      const side = data < current.data ? 'left' : 'right';
      if (current[side] === null) { current[side] = node; return; }
      current = current[side];
    }
  }

  find(data) {
    let current = this._root;
    while (current !== null) {
      if (current.data === data) return current;
      current = data < current.data ? current.left : current.right;
    }
    return null;
  }

  has(data) { return this.find(data) !== null; }

  remove(data) {
    const removeNode = (node, value) => {
      if (node === null) return null;
      if (value < node.data) node.left = removeNode(node.left, value);
      else if (value > node.data) node.right = removeNode(node.right, value);
      else {
        if (node.left === null) return node.right;
        if (node.right === null) return node.left;
        let successor = node.right;
        while (successor.left !== null) successor = successor.left;
        node.data = successor.data;
        node.right = removeNode(node.right, successor.data);
      }
      return node;
    };
    this._root = removeNode(this._root, data);
  }

  min() {
    let node = this._root;
    if (node === null) return null;
    while (node.left !== null) node = node.left;
    return node.data;
  }

  max() {
    let node = this._root;
    if (node === null) return null;
    while (node.right !== null) node = node.right;
    return node.data;
  }
}

module.exports = { BinarySearchTree };
