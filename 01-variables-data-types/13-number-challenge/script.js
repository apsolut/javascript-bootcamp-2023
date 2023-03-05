// Number challenge
let x = Math.floor(Math.random() * 100 + 1);
let y = Math.floor(Math.random() * 50 + 1);

console.log('Sum', x + y);
console.log('Difference', x - y);
console.log('productOutput', x * y);
console.log('quotient', x / y);
console.log('quotient', x % y);

// better ways to do it

let xx = Math.floor(Math.random() * 100 + 1);
let yy = Math.floor(Math.random() * 50 + 1);

// sum
const sum = xx + yy;
const sumOutput = `${xx} + ${yy} = ${sum}`;
console.log(sumOutput);
// diff
const diff = xx - yy;
const diffOutput = `${xx} - ${yy} = ${diff}`;
console.log(diffOutput);
// product
const prod = xx * yy;
const prodOutput = `${xx} * ${yy} = ${prod}`;
console.log(prodOutput);
// quotient
const quot = xx / yy;
const quotCeil = Math.ceil(quot);
const quotOutputC = `with ceil: ${xx} / ${yy} = ${quotCeil}`;
const quotOutput = `without ceil: ${xx} / ${yy} = ${quot}`;
console.log(quotOutputC);
console.log(quotOutput);
// remainder
const rem = xx % yy;
const remOutput = `${xx} % ${yy} = ${rem}`;
console.log(remOutput);
