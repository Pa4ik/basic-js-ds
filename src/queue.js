const { NotImplementedError } = require('../extensions/index.js');

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null; // Points to the first node
    this.tail = null; // Points to the last node
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (!this.tail) {

      this.head = newNode;
      this.tail = newNode;
    } else {

      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const removedValue = this.head.value;
    this.head = this.head.next;


    if (!this.head) {
      this.tail = null;
    }

    return removedValue;
  }
}

module.exports = {
  Queue
};
