import axios from 'axios';

const pokemonNames = ['squirtle', 'bulbasaur', 'charmander', 'pikachu', 'psyduck', 'snorlax', 'mewtwo', 'mew', 'hitmonlee'];

const fetchPokemon = async (onePokemon) => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${onePokemon}`);
  return response.data;
};

const getPokemon = () => {
  const pokemonData = [];
  const promises = pokemonNames.map((pokemon) => {
    return fetchPokemon(pokemon);
  });
  
  return Promise.all(promises)
    .then(responses => {
      responses.forEach((response) => {
        pokemonData.push(response.species.name);
      });
      console.log(pokemonData);
      return pokemonData;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
};

function networkCall() {
  return getPokemon();
}

export default networkCall;
