
/// EXAMPLE OF TEMPLATE STRINGS
// No need to use template strings if it's just for a variable.

function fullDate() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}

fullDate();

//// ANOTHER EXAMPLE

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

doubleMessage(10);
