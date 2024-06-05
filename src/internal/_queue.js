class Node {
  value;
  next;
  constructor(value) {
    this.value = value;
  }
}

class Queue {
  first;
  last;
  size;
  constructor() {
    this.clear();
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  dequeue() {
    const current = this.first;
    if (!current) {
      return;
    }
    this.first = this.first.next;
    this.size--;
    return current.value;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  * [Symbol.iterator]() {
    let current = this.first;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

export default Queue;