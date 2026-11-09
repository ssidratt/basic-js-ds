const { ListNode } = require("../extensions/list-node.js");

class Queue extends ListNode {
  constructor() {
    super();
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;

    if (this.head === null) {
      this.tail = null;
    }

    return value;
  }

  getUnderlyingList() {
    if (this.head === null) {
      return null;
    }

    const result = {
      value: this.head.value,
      next: null,
    };

    let source = this.head.next;
    let target = result;

    while (source !== null) {
      target.next = {
        value: source.value,
        next: null,
      };

      target = target.next;
      source = source.next;
    }

    return result;
  }
}

module.exports = {
  Queue,
};
