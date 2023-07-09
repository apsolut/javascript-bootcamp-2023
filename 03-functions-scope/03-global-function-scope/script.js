const x = 100;
console.log('in global', x);

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function global');
}

run();

function add() {
  const y = 50;
  console.log(y);
  console.log('y+x', y + x);
}

// console.log( y ); // not defined
add();
