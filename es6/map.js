
//// MAP EXAMPLE
// map helper - is a way of creating a new array from manipulating an old array


var images = [
  { height: '34px', width: '39px' },
  { height: '54px', width: '19px' },
  { height: '83px', width: '75px' },
];

var heights = images.map(function(image) {
   return image.height;
});

heights;


/////ANOTHER MAP EXAMPLE


var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map(function (trip) {
   return trip.distance / trip.time;
});

speeds;


/////ANOTHER MAP EXAMPLE


var numbers = [1,2,3,4];

var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++) {
 doubledNumbers.push(numbers[i] * 2);
}

var doubled = numbers.map(function(number) {
 	return number * 2;
});

doubled;
doubledNumbers;


/////ANOTHER MAP EXAMPLE


var cars = [
  { model: 'Buick', price: 'cheap' },
  { model: 'Ferrari', price: 'expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});

prices;
