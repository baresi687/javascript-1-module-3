// kitchen()  // run the code
//     .then()    // next step
//     .then()    // next step
//     .catch()   // error caught here
//     .finally() // end of the promise [optional]

// Async / Await in JS -> try, catch
// When we're using async/await, we use this format:

//👇 Magical keyword

// async function kitchen() {
//   try {
//     // Let's create a fake problem
//     await abc;
//   } catch (error) {
//     console.log("abc does not exist", error);
//   } finally {
//     console.log("Runs code anyways");
//   }
// }

// kitchen(); // run the code

function getSomething() {
  console.log("Hello I am response");
}

const result = document.querySelector(".results");

try {
  // Let's create a fake problem
  getSomething();
  result.innerHTML = "Success";
} catch (error) {
  console.log("Nah, there is an error");
  result.innerHTML = "Nah there is an error";
} finally {
  console.log("Runs code anyways");
}
