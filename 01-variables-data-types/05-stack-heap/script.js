const name = "John";
const age = 30;

// reference values on heap
const person = {
  name: "Brad",
  age: 40,
};

let newName = name;
newName = "Xman";

let newPerson = person;
newPerson.name = "Aleksandar";

console.log(newName, name); // John
console.log(person, newPerson); // John
