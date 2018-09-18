
// REDUCE EXAMPLE

var primaryColours = [
  { colour: 'red'},
  { colour: 'blue'},
  { colour: 'green'}
];

primaryColours.reduce(function(previous, primaryColour) {
  previous.push(primaryColour.colour);
  	return previous;
}, []);

/// returns - ['red', 'blue', 'green'];


///ANOTHER EXAMPLE

var numbers = [10,20,30];

var sum = 0;

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// return 60

/// ANOTHER EXAMPLE

// Use the 'reduce' helper to find the sum of all the distances traveled.  Assign the result to the variable 'totalDistance'

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var sum = 0;

var totalDistance = trips.reduce(function(sum, trip) {
    return sum + trip.distance;
}, 0);

totalDistance;

// returns total distance amount
