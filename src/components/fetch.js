/** import this in pokemonPage,
 * pass it as an  argument
 * and call the function inside pokemonPageUtil setPokemonData
 */

export const getPokemonData = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await response.json();
  return pokeData;
};
