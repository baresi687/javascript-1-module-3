// Example 1

// http://172.28.85.42:5500/lesson-3/1-get-query-parameters/index.html?school=hreinn
console.log(document.location);

// How to get the query param

console.log(document.location.search); // ?school=hreinn

const queryString = document.location.search;
// In order to get the value
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("school"));
const mySchoolParam = params.get("school");

//  I want to check that I have a param called school

if (!params.has("school")) {
  console.log("I dont't have the param school");
}

// console log I have the param
else if (params.get("school") === "hreinn") {
  console.log("param is Hreinn");
}
// I want to check that this param is equal to noroff
// okay the param is Noroff

// else redirect to another page
else {
  document.location.href = "second.html";
}
