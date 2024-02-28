import HashMap from './src/hashMap.js';

const newHashMap = new HashMap();


// SET METHOD 'set(key, value)'

// // Check if values are added correctly
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
// console.log('Hash map: \n', newHashMap.buckets, '\n');

// // Check if value is updated correctly
// console.log('Edited node: \n', newHashMap.buckets[7], '\n');
// newHashMap.set('Jack', 'Garciaaaaa');
// console.log('Edited node: \n', newHashMap.buckets[7], '\n');

// ******************************************************************************

// GET METHOD 'get(key)'
// console.log('Value of key \'Eva\': ', newHashMap.get('Eva'));

// ******************************************************************************

// HAS METHOD 'has(key)'
// console.log('Hash map has \'Eva\': ', newHashMap.has('Ike'));

// ******************************************************************************

// REMOVE METHOD 'remove(key)'

// Only 1 node in linked list
// console.log('Original hash map: ', newHashMap);
// console.log(newHashMap.remove('John'));
// console.log('Updated hash map: ', newHashMap);

// 2 nodes in linked list
// console.log('Original hash map: ', newHashMap.buckets);
// console.log(newHashMap.remove('Alice'));
// console.log('Updated hash map: ', newHashMap.buckets);

// 3 nodes in linked list, remove middle node
// console.log('Original hash map: ', newHashMap.buckets);
// console.log(newHashMap.remove('Frank'));
// console.log('Updated hash map: ', newHashMap.buckets);

// ******************************************************************************

// LENGTH 'length()'
// console.log(newHashMap.length());

// ******************************************************************************

// CLEAR 'clear()'
// console.log(newHashMap);
// newHashMap.clear();
// console.log(newHashMap);

// ******************************************************************************

// KEYS 'keys()'
// console.log(newHashMap.buckets);
// console.log(newHashMap.keys());

// ******************************************************************************

// VALUES 'values()'
// console.log(newHashMap.buckets);
// console.log(newHashMap.values());

// ******************************************************************************

// ENTRIES 'entries()'
// console.log(newHashMap.entries());

// ******************************************************************************

// LOAD FACTOR 'checkLoadFactor()'
// spam with new nodes
// newHashMap.set('Sophia', 'Miller');
// newHashMap.set('Liam', 'Johnson');
// newHashMap.set('Olivia', 'Smith');
// newHashMap.set('Noah', 'Brown');
// newHashMap.set('Emma', 'Williams');
// newHashMap.set('Mia', 'Anderson');
// newHashMap.set('Lucas', 'Garcia');
// newHashMap.set('Ava', 'Martinez');
// newHashMap.set('Ethan', 'Wong');
// newHashMap.set('Isabella', 'Taylor');
// newHashMap.set('Oliver', 'Doe');
// newHashMap.set('Amelia', 'Jones');
// newHashMap.set('Jackson', 'Wilson');
// newHashMap.set('Sophie', 'Thomas');
// newHashMap.set('Elijah', 'Lee');
// newHashMap.set('Charlotte', 'Jackson');
// newHashMap.set('Carter', 'Anderson');
// newHashMap.set('Aria', 'White');
// newHashMap.set('Ezra', 'Harris');
// newHashMap.set('Scarlett', 'Johnson');

console.log('old capacity value: ', newHashMap.capacity);
console.log(newHashMap);

// improve load factor
newHashMap.checkLoadFactor(); // Doubles array capacity
console.log(newHashMap);

