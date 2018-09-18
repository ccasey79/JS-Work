

// Array Helper methods

// forEach
// map
// filter
// find
// every
// some
// reduce


// FOREACH examples

var colors = ['blue', 'yellow', 'red', 'orange'];

colors.forEach(function(color) {
  console.log(color);
});



// create an array of numbers
var numbers = [1,2,3,4,5];

// create a variable to hold the sum
var sum = 0;

// loop over the array, incrementing the sum variable
numbers.forEach(function(number) {
  sum += number
});

// print the sum variable
sum;



//Another example

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

    images.forEach(function(image) {
        areas.push(image.height * image.width);
    });
