let x;
const person = {
  name: 'John Deere',
  age: 30,
  location: 'USA',
  isAdmin: true,
  address: {
    street: 'Main St',
    city: 'Boston',
  },
  hobbies: ['music', 'movies', 'sports'],
};

console.log(person);

x = person.age;
console.log(person.name);
console.log('brackets []:', person['name']);
x = person.address.street;
console.log(x);
x = person.hobbies[1];
console.log('from array:', x);

delete person.age; // removed
console.log(person.age); // undefined

person.name = 'Steve Smith';
console.log(person.name);

person.greet = function () {
  console.log(`Hello my name is ${this.name}`); // person.name
};
person.greet();

// naming
const person2 = {
  'first name': 'John',
  'last name': 'Olive',
};
console.log(person2);
x = person2['last name']; // person2.last name <- error
console.log(x);
