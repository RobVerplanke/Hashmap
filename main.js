import HashSet from './src/hashSet/hashSet.js';

const newHashSet = new HashSet();


// SET METHOD 'set(key)'

newHashSet.set('Alice');
newHashSet.set('Bob');
newHashSet.set('Charlie');
newHashSet.set('David');
newHashSet.set('Eva');
newHashSet.set('Frank');
newHashSet.set('Grace');
newHashSet.set('Henry');
newHashSet.set('Rob');
newHashSet.set('Isabel');
newHashSet.set('Jack');

console.log('Hash set: \n', newHashSet.buckets, '\n');


// HAS METHOD 'has(key)'
// console.log('Hash set has \'Alice\': ', newHashSet.has('Alice')); // true


// REMOVE METHOD 'remove(key)'

// console.log('Original hash map: ', newHashSet.buckets);
// console.log(newHashSet.remove('Rob'));
// console.log('Updated hash map: ', newHashSet.buckets);


// console.log(newHashSet.length());


// CLEAR 'clear()'
// console.log(newHashSet);
// newHashSet.clear();
// console.log(newHashSet);


// KEYS 'keys()'
// console.log(newHashSet.buckets);
// console.log(newHashSet.keys());
