function printMessage(message = "No value") {
  // I want to check if there is no message
  // I want to assign text to this message
  // I want console log the message
  //   if (!message) {
  //     message = "No value";
  //   }
  console.log(message);
}

printMessage();

// Another example

function getSum(numA = 0, numB = 0) {
  return numA + numB;
}

const totalSum = getSum(4, 4);
console.log(totalSum);
