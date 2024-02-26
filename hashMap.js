/* eslint-disable no-restricted-syntax */
import createNode from './node.js';

const HasMap = class {
  constructor() {
    this.length = 16;
    this.buckets = new Array(this.length).fill(null).map(() => []);
    this.occupied = 0;
  }

  // Generate hash code
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.length;
    }

    return hashCode;
  }

  // Add new key value pair
  set(key, value) {
    const index = this.hash(key); // Convert key to hash code
    const bucket = this.buckets[index]; // Corresponding bucket
    let keyExists = false;

    for (const node of bucket) { // Loop through item(s)
      if (node.key === key) {
        node.value = value; // Key is the same as existing key, replace value
        keyExists = true;
      }
    }

    if (!keyExists) { // Key doesn't exist, add new node
      bucket.push(createNode(key, value));
    }

  }
};

const newHashMap = new HasMap();
console.log(newHashMap.buckets);

newHashMap.set('John', 'Doe');
newHashMap.set('Alice', 'Smith');
newHashMap.set('Bob', 'Johnson');
newHashMap.set('Charlie', 'Williams');
newHashMap.set('David', 'Brown');
newHashMap.set('Eva', 'Miller');
newHashMap.set('Frank', 'Taylor');
newHashMap.set('Grace', 'Martinez');
newHashMap.set('Henry', 'Anderson');
newHashMap.set('Isabel', 'Wong');
newHashMap.set('Jack', 'Garcia');
newHashMap.set('Jack', 'Gaaarcia');


console.log(newHashMap.buckets);
