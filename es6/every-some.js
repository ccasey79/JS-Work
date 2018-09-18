
//// CLASSIC FOR LOOP - USING BOOLEANS

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for( var i = 0; i < computers.length; i++ ) {
  var computer = computers[i];

  if( computer.ram < 16 ) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
 }
}

'---'
allComputersCanRunProgram;
onlySomeComputersCanRunProgram;

/// with EVERY - we look at all the values which get returned with an AND operator
// Below same example - only using EVERY helper

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.every(function(computer) {
 	return computer.ram > 16;
});

// returns false (done as and)
// not EVERY computer has ram greater than 16 - so it's false


// Same example below - with SOME
// WITH SOME - difference with EVERY, does any of the values agree
// with the particular criteria using an OR operator.

var computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.some(function(computer) {
 	return computer.ram > 16;
});

// returns true (done as or)
// as SOME of the values are greater than 16 - so it's true.

///ANOTHER EVERY examples

var names = [
 	'Alex',
  'Fred',
  'Holly'
];

names.every(function(name) {
  return name.length > 4;
});

//returns false


/// ANOTHER SOME EXAMPLE - same as above, only using SOME.

var names = [
 	'Alex',
  'Fred',
  'Holly'
];

names.some(function(name) {
 	return name.length > 4;
});

// returns true


//// ANOTHER EVERY EXAMPLE

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];


var hasSubmitted = users.every(function(user) {
    return user.hasSubmitted = true;
});

hasSubmitted;

// returns false


///ANOTHER SOME EXAMPLE

var requests = [
  { url: '/photos', status: 'complete' },
  { url: '/albums', status: 'pending' },
  { url: '/users', status: 'failed' }
];

var inProgress = requests.some(function(request) {
   return request.status === 'pending';
});

inProgress;

// returns true
