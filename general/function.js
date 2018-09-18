
// var orderCount = 0;
//
// function takeOrder(topping, crustType) {
//   orderCount = orderCount + 1;
// }
//
// function getSubTotal(itemCount) {
//   return itemCount * 7.5;
// }
//
// function getTax() {
//   return getSubTotal(orderCount) * 0.06;
// }
//
// function getTotal() {
//   return getSubTotal(orderCount) + getTax();
// }
//
// console.log(getSubTotal(orderCount));
// console.log(getTotal());


// Basic miles into km conversion combining functions
function multiplyBySixOne(mile) {
  return mile * 1;
}

function getKilom(mile) {
  return multiplyBySixOne(mile) * 1.61;
}

console.log('The distance covered in Kms is: ' + getKilom(10));

function multiplyByHundred(meter) {
  return meter * 2;
}

function getCms(meter) {
  return multiplyByHundred(meter) * 100;
}

console.log("The distance covered in cms: " + getCms(2));

//////////////////////////////

// Function Expression
var babe = function(model) {
  console.log(model + " is absolutely fine!");
}

babe('Siobhan');

/////////////////////////////

// Function Expression using IF / ELSE
var quarter = function(number) {
    return number / 4;
}

if (quarter(120) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

/////////////////////////////

// Function with Global & Local variables
var my_number = 7; //this has global scope

var timesTwo = function(number) {
    var my_number = number * 2;    // local variable
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ")
console.log(my_number);

//////////////////////////////

// Function with IF / ELSE statement
var sleepCheck = function(numHours) {
    if (numHours >= 8) {
       return "You're getting plenty of sleep! Maybe even too much!";
    } else {
        numHours < 8;
        return "Get some more shut eye!";
    }
}

sleepCheck(10);
sleepCheck(5);
sleepCheck(8);
