

var americanCountries = ['USA', 'Brazil', 'Argentina', 'Peru'];
var asianCountries = ['India', 'China', 'Thailand', 'Bali'];

var worldCountries = americanCountries.concat(asianCountries);

var world = worldCountries.map(function(world) {
  return world;
});

world;

americanCountries.find(function(country) {
  return country === "Brazil";
});

americanCountries.includes('Brazil');

asianCountries.indexOf('Bali');

var countryContainer = asianCountries.slice(0,2);

countryContainer;

americanCountries.reverse();

americanCountries.join(', ');

var removedCountry = americanCountries.splice(3);

removedCountry;

americanCountries;
