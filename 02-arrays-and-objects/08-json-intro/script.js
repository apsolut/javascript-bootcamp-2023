const post = {
  id: 1,
  title: 'Hello World',
  body: 'This is my first post',
};

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str.id); //undefined
// parse JSON
const obj = JSON.parse(str);
console.log(obj.id); // 1

const posts = [
  {
    id: 1,
    title: 'Hello World',
    body: 'This is my first post',
  },
  {
    id: 2,
    title: 'Goodbye World',
    body: 'This is my second post',
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);
console.log(str);
