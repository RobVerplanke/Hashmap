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


  // Add new key:value pair to linked list or update existing node
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
}
