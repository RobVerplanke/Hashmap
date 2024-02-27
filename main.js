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

// // Check if existing value is updated correctly
// newHashMap.set('Jack', 'Garciaaaaa');

// console.log('Edited node: \n', newHashMap.buckets[15], '\n');


// GET METHOD 'get(key)'
// console.log('Value of key \'Eva\': ', newHashMap.get('Eva'));


// HAS METHOD 'has(key)'
// console.log('Hash map has \'Eva\': ', newHashMap.has('Ike'));


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
