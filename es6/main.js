
window.onload = function() {

// LET WORD EXAMPLE

  var x = 10;

  if (x > 5) {
    let x = 15;
    console.log("Inside the block: " + x);
  }

  console.log("Outside the block: " + x);


// DEFAULT PARAMETERS

  function topNinja(name="Burt", colour="ginger", weapon="snake") {
    console.log(name + " has " + colour +  " hair and he has a deadly " +  weapon);

  }

  topNinja();

  // CONSTANTS

  const pi = 3.142;          // this const value cannot be changed, ignores the function const.

    function calcArea(r) {
      const pi = 10;           // const value can only be changed inside the function
      console.log("The area calculated inside the calcArea function is " + pi * r * r );
    }

  calcArea(6);
  console.log("The value of " + pi + " outside the calcArea function");













}
