// array literal
const numbers = [12, 45, 33, 29, 39];
const mixed = ['apple', 45, true, undefined, null, { a: 1, b: 2 }, new Date()];
// array constructor
const fruits = new Array('apple', 'orange', 'pear');
// add always to last
fruits[fruits.length] = 'jabuke';
length = fruits.length;
x = fruits[0];
y = `My fav fruit is ${fruits[1]}`;

console.log(numbers);
console.log(fruits);
console.log(x);
console.log(y);
console.log('mixed', mixed);
console.log('length', length);
