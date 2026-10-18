const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() { this._head = null; this._tail = null; }

  getUnderlyingList() {
    const toPlainList = (node) => node === null
      ? null
      : { value: node.value, next: toPlainList(node.next) };
    return toPlainList(this._head);
  }

  enqueue(value) {
    const node = new ListNode(value);
    if (this._tail === null) this._head = node;
    else this._tail.next = node;
    this._tail = node;
  }

  dequeue() {
    if (this._head === null) return undefined;
    const value = this._head.value;
    this._head = this._head.next;
    if (this._head === null) this._tail = null;
    return value;
  }
}

module.exports = { Queue };
