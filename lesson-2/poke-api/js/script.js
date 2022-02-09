// My endpoint
// https://pokeapi.co/api/v2/pokemon?offset=20&limit=40

const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

// We need to select the pokemon container "pokemons"

const pokeContainer = document.querySelector(".pokemons");
const pokeLoading = document.querySelector(".wrapper");
console.log(pokeLoading);

async function getPokemonsNames() {
  try {
    const response = await fetch(API_URL);
    console.log(response);

    const responseJSON = await response.json();
    pokeLoading.style.display = "none";
    console.log(responseJSON);

    const result = responseJSON.results;
    console.log(result);
    for (let i = 0; i < result.length; i++) {
      console.log(result[i]);
      pokeContainer.innerHTML += `<li><span>${result[i].name} 🐱‍🚀</span></li>`;
    }
  } catch (error) {
    pokeLoading.style.display = "none";
    console.log("Some error happened 🤢 > ", error);
    pokeContainer.innerHTML = `<li><span>Error 🤢</span></li>`;
  }
}

getPokemonsNames();
