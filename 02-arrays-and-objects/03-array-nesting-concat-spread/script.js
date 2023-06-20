let x;
let y;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];

// fruits.push(berries); // add array in array
// console.log(fruits);
// x = fruits[ 3 ]; // get element from array in array
// x = fruits[ 3 ][ 1 ]; // get element from array in array
// console.log( x );

const allFruits = [fruits, berries]; // nested arrays
x = allFruits;
console.log('allFruits', x);

// concat
x = fruits.concat(berries);
console.log('concat', x);

// Spread ooperator (...)
y = [...fruits, ...berries];
console.log('spread', y);

// flatten array
const arr = [1, 2, [3, 4, [5, 6]], 8];
x = arr.flat(3);
console.log(x);

// static method on array object

y = Array.isArray(berries); // true
console.log(y);
y = Array.from('abc');
console.log(y);

const a = 'Angela';
const b = 'John';
x = Array.of(a, b);
console.log(x);
