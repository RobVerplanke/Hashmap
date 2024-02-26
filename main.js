import HashMap from './src/hashMap.js';

const newHashMap = new HashMap();


// TEST 'set(key, value)' METHOD

// Check if values are added correctly
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

console.log('Hash map: \n', newHashMap.buckets, '\n');

// Check if existing value is updated correctly
newHashMap.set('Jack', 'Garciaaaaa');

console.log('Edited node: \n', newHashMap.buckets[15], '\n');

