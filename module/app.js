
// //main application
// //import module

// //method 1 (dot notation)

// const myAddition = require('./math.js');
// const mySubtraction = require('./math.js');
// const myMultiply = require('./math.js');
// const myDivision = require('./math.js');

// //addition
// let a = 20;
// let b = 10;

// let result = myAddition.add(a, b)
// console.log(result);

// //subtraction
// let c = 26;
// let d = 20;

// let answer = myAddition.sub(c, d)
// console.log(answer);

// //multiply

// let e = 40;
// let f = 10;

// let sol = myDivision.division(e, f)
// console.log(sol);

// //division

// let g = 30;
// let h = 10;

// let check = myMultiplication.multiply(30, 10)
// console.log(check);

//distructing

const {add, sub, multiply, division} = require('./math.js');

//addition
let a = 20;
let b = 10;

let result = add(a, b)
console.log(result);

//subtraction
let c = 26;
let d = 20;

let answer = sub(c, d)
console.log(answer);

//multiply

let e = 40;
let f = 10;

let sol = multiply(e, f)
console.log(sol);

//division

let g = 30;
let h = 10;

let check = division(30, 10)
console.log(check);

