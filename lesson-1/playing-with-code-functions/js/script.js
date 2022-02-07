// Arrow function, function expression

const showPetName = (name, age) => {
  console.log(`The pet's name is ${name} and the age is ${age}`);
};

showPetName("Steve", 55);
showPetName("Lion", 44);

// Scope

// Global

const cityName = "Oslo";

function showMeTheCityName() {
  console.log("The city name is " + cityName);
}

showMeTheCityName();
console.log(cityName);

function isScania() {
  if (cityName === "Oslo") {
    console.log(cityName + " is Scandinavian");
  } else {
    console.log("not Scandinavian");
  }
}

isScania(cityName);

// Block scope

{
  const name = "Hreinn";
  const car = "Tesla";
  var age = 14;
  let someAge = 44;
}

console.log(age);

// this keyword. Does not work with arrow function.

console.log(this.document);

const myObject = {
  name: "Hreinn",
  number: 10,
  myFunction: function () {
    console.log(this.name);
  },
};

myObject.myFunction();

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   },
// };

// console.log(person.fullName());

// Ternary operator

const pet = "Rhino";

// let isDangerous; // Boolean

// if (pet === "Rhino") {
//   isDangerous = true;
// } else {
//   isDangerous = false;
// }

const isDangerous = pet === "Rhino" ? true : false;
console.log(isDangerous);
