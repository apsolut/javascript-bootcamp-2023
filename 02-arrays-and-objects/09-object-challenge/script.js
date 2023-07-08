const library = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'The Marketing of Evil',
    author: 'David Kupelian',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'Code Complete',
    author: 'Steve McConnell',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

console.log(library);
// console.log(library[0].title);

// 02 change values
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// 03 destructure
const { title: firstBook } = library[0];
console.log(firstBook);

// 04 stringify
const libJSON = JSON.stringify(library);
console.log(libJSON);
