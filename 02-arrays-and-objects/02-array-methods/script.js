let x;
const array = [1, 2, 44, 88, 91];
// add to last
// array.push(101);
// array.pop(); // remove last item
// added to start (zero index0
// array.unshift(99);
// array.shift(); // remove first item
// array.reverse();

// get
x = array.includes(88);
x = array.indexOf(91);
// x = array.slice(1); // 2, 44, 88, 91
// x = array.slice(2, 88);
//x = array.splice(2, 2);
// x = array.splice(3, 1); // 88
x = array.splice(1, 4).reverse().toString(); // 2, 44, 88, 91

console.log(array);
console.log(x);
