/* eslint-disable no-restricted-syntax */
import LinkedList from './linkedList.js';

// Load factor: for calculating efficiency (0,75 is optimal)
const MIN_LOAD_FACTOR = 0.5;
const MAX_LOAD_FACTOR = 1;
const INITIAL_CAPACITY = 8;

export default class HashMap {
  constructor() {
    this.capacity = INITIAL_CAPACITY;
    this.minLoadFactor = MIN_LOAD_FACTOR;
    this.maxLoadFactor = MAX_LOAD_FACTOR;
    this.occupied = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  // Generate hash code (number between 0 and the capacity size)
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }


  // Check and adjust capacity/occupied balance if needed
  checkLoadFactor() {

    // Calculate current load factor
    let currentFactor = Math.round((this.occupied / this.capacity) * 100) / 100; // 2 decimals
    console.log('current load factor: ', currentFactor);

    while (currentFactor < this.minLoadFactor) { // Current load factor is to low
      const storedPairs = [...this.entries()]; // Store all key:value pairs

      // Resize bucket array: cut in half
      this.capacity /= 2;
      this.buckets = new Array(this.capacity).fill(null).map(() => []);

      // Add stored key:value pairs
      storedPairs.forEach((pair) => this.set(pair[0], pair[1]));

      // Calculate new load factor
      currentFactor = Math.round((this.occupied / this.capacity) * 100) / 100;
    }

    while (currentFactor > this.maxLoadFactor) { // Current load factor is to high
      const storedPairs = [...this.entries()]; // Store all key:values pairs

      // Resize bucket array: double in size
      this.capacity *= 2;
      this.buckets = new Array(this.capacity).fill(null).map(() => []);

      // Add stored key:value pairs
      storedPairs.forEach((pair) => this.set(pair[0], pair[1]));

      // Calculate new load factor
      currentFactor = Math.round((this.occupied / this.capacity) * 100) / 100;
    }
  }


  // Add new key:value pair to hash map or update existing value
  set(key, value) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket

    if (!bucket.length) { // Bucket is empty, create new linked list
      const newLinkedList = new LinkedList();

      newLinkedList.append(key, value); // Append method replaces existing value or makes new node
      bucket.push(newLinkedList);
    } else { // Bucket is not empty, add new node to existing linked list
      bucket.forEach((list) => list.append(key, value));
    }

    // Update 'occupied' counter
    this.occupied = this.length();
  }


  // Returns value that is assigned to given key
  get(key) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket

    // Use find() method of each linkedList to find corresponding node
    for (const linkedList of bucket) {
      const foundNode = linkedList.find(key);
      if (foundNode) return foundNode.value; // Return found node
    }
    return null; // Key was not found
  }


  // Returns true/false whether key is in hash map or not
  has(key) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket

    // Use find() method of each linkedList to find corresponding node
    for (const linkedList of bucket) {
      const foundNode = linkedList.find(key);
      if (foundNode) {
        return true; // Key was found
      }
    }
    return false; // Key was not found or corresponding bucket is empty
  }


  // Remove node and return true, return false if node doesn't exist
  remove(key) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket

    // Use find() method of each linkedList to find corresponding node
    for (const linkedList of bucket) {
      const foundNode = linkedList.find(key);

      if (foundNode) { // Key is found

        if (linkedList.getLength() === 1) { // Only 1 item in list, remove linked list from bucket
          this.buckets[index] = [];
          this.occupied = this.length(); // Update 'occupied' counter

          return true;
        }

        // Linked list has more than 1 node
        linkedList.pop(key); // Remove node
        this.occupied = this.length(); // Update 'occupied' counter

        return true;
      }
    }
    return false; // Key was not found or corresponding bucket is empty
  }


  // Get total length of all linked lists
  length() {
    let totalLength = 0;

    // Use getLength() method of each linkedList to get its length
    for (const bucket of this.buckets) {
      for (const linkedList of bucket) {
        totalLength += linkedList.getLength(); // Add length to total
      }
    }
    return totalLength;
  }


  // Remove all nodes in hash map
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.occupied = this.length(); // Update 'occupied' counter
  }


  // Returns array containing all keys in hash map
  keys() {
    const allKeys = [];

    for (const bucket of this.buckets) {
      for (const linkedList of bucket) {
        allKeys.push(...linkedList.getAllKeys()); // Add all keys to array
      }
    }
    return allKeys;
  }


  // Returns array containing all values in hash map
  values() {
    const allValues = [];

    for (const bucket of this.buckets) {
      for (const linkedList of bucket) {
        allValues.push(...linkedList.getAllValues()); // Add all values to array
      }
    }
    return allValues;
  }


  // Returns array that contains all key:value pairs
  entries() {
    const allEntries = [];

    for (const bucket of this.buckets) {
      for (const linkedList of bucket) {
        allEntries.push(...linkedList.getAllEntries()); // Add all key:value pairs to array
      }
    }
    return allEntries;
  }
}
