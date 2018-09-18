

// Practice file



// Basic function using return
//
// function calcPerimeter(a, b) {
//   var perimeter = a + b + a + b;
//   return perimeter;
// }
//
// var totalResult = calcPerimeter(20, 6);
//
// console.log('The total perimeter of this square is ' + totalResult);
//
// // Objects
//
// var myCar = new Object();
//
// myCar.maxSpeed = 75;
// myCar.driver = 'Sammy';
//
// myCar.drive = function() {
//   console.log("now driving");
// };
//
// console.log('The name of the driver is: ' + myCar.driver);
//
// // shorter way of writing Objects
//
// var myCar2 = {
//   maxSpeed: 100,
//   driver: 'Burt',
//   colour: 'Black',
//   drive: function(speed, time) {
//     console.log(speed * time);
//   }
// };
//
// console.log('My car maximum speed is ' + myCar2.maxSpeed);
// myCar2.drive(60, 3);


function calcArea(width, height) {
  var area = width * height;
  return area;
}

var squareArea = calcArea(10, 40);
console.log('The area of this large square is: ' + squareArea);
