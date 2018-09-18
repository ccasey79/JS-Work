
// For loops using arrays & an IF /ELSE 

var myPlaces = ['Paris', 'New York', 'Barcelona'];
var friendPlaces = ['Rome', 'Chicago', 'Paris'];

for (var i = 0; i < myPlaces.length; i++) {
    console.log(myPlaces[i]);

  for (var j = 0; j < friendPlaces.length; j++) {
        console.log(friendPlaces[j]);

    if (myPlaces[i] === friendPlaces[j]) {
    			console.log('Match: ' + myPlaces[i]);
				}
    }
}
