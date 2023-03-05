let x;

const name = 'John';
const age = 30;

x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// Template Literals
x = `Hello, my name is ${name} and I am ${age} years old and check this out: ${
  2 + 2
}`;

// .length method do this
const s = new String('Hello World');

x = typeof s;

x = s.length;
// Access value by key
x = s[0];

x = s.__proto__;
//x = s.toUpperCase();
//x = s.toLowerCase();
// x = s.charAt(0);
//x = s.indexOf('l');
//x = s.substring('2', '4');
//x = s.substring('4');
//x = s.slice('0', '5');
//x = s.slice(-11, -1); // negative
x = s.trim(); // negative
// empty space
x = '    hello world';
x = x.trim(); // removes leading space

x = s.replace('World', 'Moon');
x = s.includes('World'); // true
x = s.valueOf();
x = s.split(''); // every characted '' or by space ' '
console.log(x);
