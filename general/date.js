

/// USING THE DATE OBJECT

var myDate = new Date();
console.log(myDate);

var pastDate = new Date(1880, 1, 2);
var futureDate = new Date(2021, 11, 2);

console.log(pastDate);
console.log(futureDate);

//// List of date methods

var birthday = new Date(1985, 0, 15, 11, 15, 25);
/// year, month, day, hour, minute, second

/// get the month of the date(0-11)
console.log(birthday.getFullYear());

/// get the date of th month(1-31)
console.log(birthday.getDate());

/// get the day of the week(0-6)
console.log(birthday.getDay());

/// get the hour of the date (0-23)
console.log(birthday.getHours());

/// get the number of milliseconds since 1st Jan 1970
console.log(birthday.getTime());
