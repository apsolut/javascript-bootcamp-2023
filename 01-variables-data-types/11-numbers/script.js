let x;
const num = new Number(5); // string also to number (object)

x = num.toString(); // number to string
x = num.toString().length;
x = num.toFixed(1); // fixable
x = num.toPrecision(2);
x = num.toExponential(2);
x = num.toLocaleString('en-US'); // 5
x = num.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }); // 5,00 €
// x = num.valueOf(); // 5
// x = Number.MAX_VALUE;
// x = Number.MIN_VALUE;

console.log(x);
//console.log(num, typeof num);
