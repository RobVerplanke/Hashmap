import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Return length of linked list
  getLength() {
    return this.length;
  }


  // Return corresponding node or null
  find(key) {
    let i = 0;
    let currentNode = this.head;

    while (i < this.length) { // Iterate through linked list
      if (currentNode.key === key) return currentNode;
      currentNode = currentNode.next;
      i++;
    }
    return null;
  }


  // Add new node to linked list or update existing node
  append(key) {

    if (this.find(key)) {
      console.log('Error: Key already exists', key);
    } else { // Key doesn't exist, add new node to end of linked list
      if (!this.head) { // List is empty, set new node as head and tail
        this.head = new Node(key);
        this.tail = this.head;
        this.length++;
        return;
      }
      const newNode = new Node(key);

      // Set properties of linked list and new node
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


  // Returns an array with all keys in linked list
  getAllKeys() {
    const allKeys = [];
    let i = 0;
    let currentNode = this.head;

    // Iterate through the linked list and add each key to array
    while (i < this.length) {
      allKeys.push(currentNode.key);
      currentNode = currentNode.next;
      i++;
    }
    return allKeys;
  }
}
