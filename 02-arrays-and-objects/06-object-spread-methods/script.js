let x;
let y;
// const todo = {}; obj literal
const todo = new Object(); // obj constructor

todo.id = 1;
todo.name = 'Wash dishes';
todo.completed = false;
x = todo;
console.log(x);

const person = {
  address: {
    coords: {
      lat: 42.9389,
      lng: 23.1234,
    },
  },
};

x = person.address.coords.lat;
console.log(x);

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3, d: 4 };
// console.log(...obj1, ...obj2); // uncaught TypeError: object is not iterable
// console.log({ ...obj1, ...obj2 }); // works {}
obj3 = { ...obj1, ...obj2 };
x = obj3;
console.log(x);
// object methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods

// array
const todos = [
  { id: 1, name: 'Buy Milk', completed: false },
  { id: 2, name: 'Learn', completed: true },
  { id: 3, name: 'Take out trash', completed: false },
];
y = todos;
// y = todos[0].name; // give us first
console.log(y);
y = Object.keys(todo);
console.log('keys:', y);
y = Object.keys(todo).length;
console.log('length:', y);
y = Object.entries(todo);
console.log('entries:', y);
y = todo.hasOwnProperty('name');
console.log('hasOwnProperty:', y);

// x = obj4 = Object.assign(obj1, obj2);
// console.log('assign', x);
x = obj4 = Object.assign({}, obj1, obj2);
console.log('assign', x);
