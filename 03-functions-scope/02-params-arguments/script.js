function registerUser(user = 'Bot') {
  // old way before ES6
  // if (!user) {
  //   user = 'Not existing user';
  // }
  return user + ' is registered';
}

// console.log(registerUser()); // old way Not existing user is registered
console.log(registerUser()); // Bot user is registered
console.log(registerUser('John Doe'));

// Rest params
function sum(...numbers) {
  // return numbers;
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
}

console.log('six', sum(1, 2, 3));

// Objects as Params
function loginUser(user) {
  return `${user.name} is logged in as id ${user.id}`;
}

const user = {
  id: 1,
  name: 'John Doe',
};
console.log(loginUser(user));

// Arrays as param

function getRandom(arr) {
  // math flor, with random number but not more than array length
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];
  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6]); // must have [] brakets
// with spread we dont need brackets for array with using rest operator
function getRandom2(...arr) {
  // math flor, with random number but not more than array length
  const index = Math.floor(Math.random() * arr.length);
  const item = arr[index];
  console.log(item);
}

getRandom2(1, 2, 3, 4, 5, 6); // dont need to have []
