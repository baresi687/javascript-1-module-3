// *** List of falsy values ****
//
// false
// 0 - the number zero
// "", '' or - empty strings
// null
// undefined
// Nan - Not a Number

// Everything else is Truly

// If we are trying to check if a value exists (if it isn't null or undefined) for example,
// we can do this:

// Example 1

// const test = "";
// const test = 0;
// const test = false;
// const test = undefined;
// const test = null;
const test = "Hello";

if (test) {
  console.log("Truly");
} else {
  console.log("Falsy");
}

// Example 2

const carsData = [
  {
    make: "Tesla",
    isElectrical: true,
  },
  { make: "BMW", isElectrical: null },
];

// carsData.forEach(function (car) {
//   console.log(car);
//   if (car.isElectrical) {
//     console.log("Car make is " + car.make + " and it is electric");
//   } els
// });

carsData.forEach(function (car) {
  console.log(car);
  if (!car.isElectrical) {
    console.log("Car make is " + car.make + " and it is NOT electric");
  }
});

//TODO write example

// rather than having to check for both null and undefined like this:

//TODO write example

// That applies to all the falsy values,
// so we can check that a variable's value is not one of the falsy values
// by writing an if statement like this:

// Example 1 Play with truly and falsy values

// Example 2 Real life example
