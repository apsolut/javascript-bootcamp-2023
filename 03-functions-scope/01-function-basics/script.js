// function declaration
function sayHello() {
  console.log('Hello');
}

sayHello();
// const AP = new sayHello();

// parameters and arguments
function add(num1, num2) {
  // parameters
  console.log(num1 + num2);
}

add(2, 3); // arguments

function substract(num1, num2) {
  return num1 - num2;
}

const result = substract(10, 1);
console.log(result);
