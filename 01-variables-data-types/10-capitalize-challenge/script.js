// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';
let myNewString;

//x = myString.charAt(0); // D
x = myString[0]; // D
x = x.toUpperCase();
myNewString = x + myString.slice(1);

console.log(myNewString); // substring(1) will also work
