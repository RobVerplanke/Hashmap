/* eslint-disable no-restricted-syntax */
import LinkedList from './linkedList.js';

export default class HashMap {
  constructor() {
    this.size = 16;
    this.occupied = 0;
    this.buckets = new Array(this.size).fill(null).map(() => []);
  }


  // Generate hash code
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.size;
    }
    return hashCode;
  }


  // Add new key:value pair to hash map or update existing value
  set(key, value) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket

    if (!bucket.length) { // Bucket is empty, create new linked list and add new node
      const newLinkedList = new LinkedList();

      newLinkedList.append(key, value);
      bucket.push(newLinkedList);
    } else { // Bucket is not empty, add new node to existing linked list
      for (const list of bucket) list.append(key, value);
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
      if (foundNode) {
        return foundNode; // Return found node
      }
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

    for (const bucket of this.buckets) {
      for (const linkedList of bucket) {
        totalLength += linkedList.getLength(); // Add linked list length to total
      }
    }
    return totalLength;
  }


  // Remove all nodes in hash map
  clear() {
    this.buckets = new Array(this.size).fill(null).map(() => []);
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
