const firstName = 'Jonas';
const lastName = 'Do';
const age = 46;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring
const todo = {
  id: 132,
  title: 'take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // renaming
  title,
  user: { name }, // destructuring
} = todo;
console.log(todoId);

// Destructure Arr
// rest operator (the same as spread operator ... but in this use case is rest)
const numbers = [24, 55, 34, 99, 55];
const [first, second, ...rest] = numbers;
console.log(first, second, rest);
