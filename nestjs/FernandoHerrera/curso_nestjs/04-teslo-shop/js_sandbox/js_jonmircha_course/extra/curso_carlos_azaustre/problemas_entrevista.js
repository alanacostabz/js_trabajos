/**
 *  Problem 1 - (A)
 *
 *  Create an Object with a "hello" method that writes "Hello <name> in the console"
 */
const p = {
  name: "Carlos",
  hello: () => console.log(`Hello ${p.name}`),
};
p.hello();
p.name = "Alan";
p.hello();

/**
 *  Problem 1 - (B)
 *  How could you make the name inmutable?
 *  (Can write or just describe)
 */

// TODO -->
Object.freeze(p);
p.name = "Goldis";
p.hello();

/**
 *  Problem 2
 *  Write a function that logs the 5 cities that occur the most in the array below in order form
 *  the most number of occurrences to least
 */

const citiesList = [
  "nashville",
  "nashville",
  "los angeles",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "madrid",
  "canary islands",
  "barcelona",
  "madrid",
  "nashville",
  "barcelona",
  "london",
  "berlin",
  "madrid",
  "nashville",
  "london",
  "madrid",
];

// TODO -->
function logMostOcurrCities(numCities) {
  const cities = {};
  citiesList.forEach((city) => {
    cities[city] = !cities[city] ? 1 : (cities[city] += 1);
  });

  return Object.keys(cities)
    .map((city) => ({
      name: city,
      times: cities[city],
    }))
    .sort((a, b) => b.times - a.times)
    .slice(0, numCities)
    .map((city) => city.name);
}

console.log(logMostOcurrCities(5));
