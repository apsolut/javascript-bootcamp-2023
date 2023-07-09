const x = 100;
const foo = 1;
var bar = 2; // gets added to window object as window.bar

if (true) {
  console.log(x);
  const y = 200;
  console.log(x + y);
}

// console.log( y ); // not defined

for (let i = 0; i <= 3; i++) {
  console.log(i);
}

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}
console.log('var', c);

// for (var i = 0; i <= 3; i++) {
//   console.log(i);
// }

// run where var is func scoped
function run() {
  var d = 101;
  console.log('run', d);
}

run();
