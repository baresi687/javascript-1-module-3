// My endpoint
// https://pokeapi.co/api/v2/pokemon?offset=20&limit=40

const API_URL = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=40";

// We need to select the pokemon container "pokemons"

const pokeContainer = document.querySelector(".pokemons");
const pokeLoading = document.querySelector(".wrapper");

async function getPokemonsNames() {
  try {
    const response = await fetch(API_URL);
    const responseJSON = await response.json();
    pokeLoading.style.display = "none";
    const result = responseJSON.results;

    for (let i = 0; i < result.length; i++) {
      pokeContainer.innerHTML += `<li><span><a href="pokemon-details.html?name=${result[i].name}">${result[i].name} 🐱‍🚀</a></span></li>`;
    }
  } catch (error) {
    pokeLoading.style.display = "none";
    console.log("Some error happened 🤢 > ", error);
    pokeContainer.innerHTML = `<li><span>Error 🤢</span></li>`;
  }
}

getPokemonsNames();
