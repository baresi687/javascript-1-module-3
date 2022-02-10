const url = "htps://catfact.ninja/facts";
const catFactContainer = document.querySelector(".my-cats-fact");
console.log(catFactContainer);

fetch(url) // promise response
  .then((response) => response.json()) // promise any
  .then((data) => {
    console.log(data.data);
    const myCatFactsArray = data.data;
    catFactContainer.innerHTML = "";

    for (let i = 0; i < myCatFactsArray.length; i++) {
      console.log(myCatFactsArray[i].fact);
      //   const liCats = document.createElement("li");
      //   liCats.append(myCatFactsArray[i].fact);
      //   catFactContainer.append(liCats);
      if (i >= 4) {
        break;
      }
      catFactContainer.innerHTML += `<li>${myCatFactsArray[i].fact}</li>`;
    }
  })

  .catch((error) => {
    catFactContainer.innerHTML = displayError();
  });
