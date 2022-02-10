console.log(document.location.search);

const queryString = document.location.search;
// In order to get the value
const params = new URLSearchParams(queryString);
console.log(params);
console.log(params.get("name")); // This will get the pokemon name

const pokemonName = params.get("name");
console.log(pokemonName);

const APIUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
console.log(APIUrl);

// Select my container

const pokeDetails = document.querySelector(".pokemon-details");

async function getPokemonDetails() {
  try {
    const response = await fetch(APIUrl);
    const singlePokemonDetails = await response.json();
    console.log("Single Pokemon details: ", singlePokemonDetails);
    const pokemonWeight = singlePokemonDetails.weight;
    console.log(pokemonWeight);
    pokeDetails.innerHTML = `<li>The Pokemon weight is: ${pokemonWeight}</li>`;
  } catch (error) {
    console.log(error);
  }
}

getPokemonDetails();
