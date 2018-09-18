
/// ARROW FUNCTIONS

/// Original function es5 syntax
const add = function(a, b) {
  return a + b;
}

console.log(add(2, 5));

/// Same function written with a fat arrow
// const add = (a, b) => {
//   return a + b;
// }
//
// add(2, 5);

/// Only on a single JS expression - can do this!
// const add = (a, b) => a + b;
//
// add (2, 5);


const double = (number) => {
  return number * 2;
}

console.log(double(4));
