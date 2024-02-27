import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  // getHead() {
  //   return this.head;
  // }

  // getTail() {
  //   return this.tail;
  // }

  getLength() {
    return this.length;
  }


  // Iterate through linked list, return corresponding node or null
  find(key) {
    let i = 0;
    let current = this.head;

    while (i < this.length) {
      if (current.key === key) return current;
      current = current.next;
      i++;
    }
    return null;
  }


  // Add new node to linked list or update existing node
  append(key, value) {
    let keyExists = false;

    if (!this.head) { // List is empty, set new node as head and tail
      this.head = new Node(key, value);
      this.tail = this.head;
      this.length++;
    }

    if (this.find(key)) { // Key exists in list, update value
      this.find(key).value = value;
      keyExists = true;
    }

    if (!keyExists) { // Key doesn't exist, add new node to end of linked list
      const newNode = new Node(key, value);

      this.tail.next = newNode;
      newNode.prev = this.tail;
      newNode.next = null;
      this.tail = newNode;
      this.length++;
    }
  }


  // Remove node from linked list (method is called when linked list has more than 1 node)
  pop(key) {
    const node = this.find(key);

    if (this.head.key === node.key) { // Found node is head of linked list
      this.head = this.head.next;
      this.head.prev = null;
    } else if (this.tail.key === node.key) { // Found node is tail of linked list
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else { // Found node is not the head or tail
      node.next.prev = node.prev;
      node.prev.next = node.next;
    }
    this.length--;
  }
}
