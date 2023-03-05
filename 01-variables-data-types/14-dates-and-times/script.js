let d;
d = new Date();
//console.log(typeof d); // by default object
d = d.toString();
d = new Date(2021, 1, 10, 12, 30, 0); // month is zero based (second)
d = new Date('2021-01-10'); //month normal
// if year first then could be wrong because of time zone
d = new Date('07/10/2021 12:30:00'); //month normal

// timestamps
d = Date.now(); // in milliseconds
d = new Date('07-10-2022 12:30:00');
d = d.getTime();
//d = d.valueOf();
d = new Date(1678013314942); // miliseconds
d = Math.floor(Date.now() / 1000); // in seconds
// d = Math.floor(Date.now() / 1000 / 60 / 60 / 24 / 365); // in years
console.log(d);
