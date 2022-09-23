// export const getPokemonData = async ({pokemonName}) => {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
//     );
//     const pokeData = await response.json();
//     return pokeData;
//   };


export const searchPokemon = ({
  e,
  pokemonName,
  getPokemonData,
  setPokemonData,
  setPokemonName,
}) => {
  e.preventDefault();

  if (!pokemonName) return;

  getPokemonData(pokemonName).then((pokeData) => {
    // console.log('pokemonData from API: ', pokeData);

    setPokemonData({
      name: pokemonName,
      species: pokeData.species.name,
      img: pokeData.sprites.front_default,
      // comments.txt #2
      hp: [pokeData.stats[0].stat.name, pokeData.stats[0].base_stat],
      attack: {
        attackName: pokeData.stats[1].stat.name,
        attackStat: pokeData.stats[1].base_stat,
      },
      defense: [pokeData.stats[2].stat.name, pokeData.stats[2].base_stat],
      specialAttack: [pokeData.stats[3].stat.name, pokeData.stats[3].base_stat],
      specialDefense: [
        pokeData.stats[4].stat.name,
        pokeData.stats[4].base_stat,
      ],
      speed: [pokeData.stats[5].stat.name, pokeData.stats[5].base_stat],
      abilities: [
        pokeData.abilities[0].ability.name,
        pokeData.abilities[1].ability.name,
      ],
      dataName: { stats: 'stats', abilities: 'abilities' },
      classes: {
        pokeNameContainer: 'pokemon-name-container',
        imgContainer: 'img-container',
      },
    });
    setPokemonName('');
  });
};
