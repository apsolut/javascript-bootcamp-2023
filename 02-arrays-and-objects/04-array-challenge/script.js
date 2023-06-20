let x;

const arr = [1, 2, 3, 4, 5];
console.log(arr);
// Result [6,5,4,3,2,1,0]
x = arr.unshift(0);
x = arr.push(6);
x = arr.reverse();

console.log(x); // Result

// Challenge 2
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];
array5 = [...arr1, ...arr2]; // concat with spread operator
array6 = arr1.slice(0, 4); // remove all after 4...
console.log(array6);
console.log('concat', array6.concat(arr2));

// let x  = x.splice(4, 1); // wont work, result is 5
array5.splice(4, 1); // work, result is 1,2...9,10

console.log(array5);
