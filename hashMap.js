import node from './node.js';

const HasMap = class {
  constructor() {
    this.size = 16;
    this.buckets = new Array(this.size).fill(null);
  }

  // Generate hash code
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.buckets; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode % this.length;
  }

  // Add new key value pair
  set(key, value) {

    // Convert key to hash code
    const index = this.hash(key);

    // Search for hash code in hashmap to find the corresponding bucket

    // Check if the bucket is empty
    // If the bucket is empty, create a new key-value pair and add it to the bucket
    // Iterate over key-value pairs in the bucket
    // Check if the key matches an existing key in the bucket
    // If the key matches, update the existing value with the new value
    // Exit the method since the update is done
    // If no matching key is found, add a new key-value pair to the bucket

  }
};

const newHashMap = new HasMap();

console.log(newHashMap);
