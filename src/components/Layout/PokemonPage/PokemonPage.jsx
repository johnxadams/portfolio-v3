// react hook
import React, { useState } from 'react';

import { BsSearch } from 'react-icons/bs';

// styled-components
import { PokeSearchInput } from '../../StyledComponents/Input';
import { PokeSearchBtn } from '../../StyledComponents/Button';

//comments.txt #1

const getPokemonData = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await response.json();
  return pokeData;
};

// rfc
export default function PokemonPage() {

  // useStates 2x
  const [pokemonData, setPokemonData] = useState({
    name: '',
    species: '',
    img: '',
    hp: '',
    attack: '',
    defense: '',
    specialAttack: '',
    specialDefense: '',
    abilities: '',
    speed: '',
    dataName: '',
    classes: '',
  });
  const [pokemonName, setPokemonName] = useState('');

  // eventHandlers 2x
  const handlePokemonNameInput = (e) => {
    setPokemonName(e.target.value.toLowerCase());
  };

  const handlePokemonSearch = (e) => {
    e.preventDefault();

    if (!pokemonName) return;

    getPokemonData(pokemonName).then((pokeData) => {
      console.log("pokemonData from API: ", pokeData);

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
        specialAttack: [
          pokeData.stats[3].stat.name,
          pokeData.stats[3].base_stat,
        ],
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

  return (
    <>
      <div className="pokemon-container">
        <form id="form-tag" onSubmit={handlePokemonSearch}>
          <PokeSearchInput
            onChange={handlePokemonNameInput}
            id="pokemon-input"
            type="text"
            placeholder="search pokemon"
            value={pokemonName}
          />
          <PokeSearchBtn type="submit" id="search-btn">
            <BsSearch className="searchIcon" />
          </PokeSearchBtn>
        </form>
        <div id="pokedex-container">
          {/*
           * comments.txt #3
           * */}
          <div className={pokemonData.classes.pokeNameContainer}>
            {pokemonData.name.toUpperCase()}
          </div>
          <div className={pokemonData.classes.imgContainer}>
            <img src={pokemonData.img} alt={pokemonData.name} />
          </div>
          <h2 className="stats-header">{pokemonData.dataName.stats}</h2>
          <div className="stats-container">
            <div className="list-of-stats">
              {/* hp */}
              <span>{pokemonData.hp[0]}</span>
              <span>{pokemonData.hp[1]}</span>
            </div>
            <div className="list-of-stats">
              {/* attack */}
              <span>{pokemonData.attack.attackName}</span>{' '}
              <span>{pokemonData.attack.attackStat}</span>
            </div>
            {/* defense */}
            <div className="list-of-stats">
              <span>{pokemonData.defense[0]}</span>
              <span>{pokemonData.defense[1]}</span>
            </div>
            {/*  specialAttack */}
            <div className="list-of-stats">
              <span>{pokemonData.specialAttack[0]}</span>
              <span>{pokemonData.specialAttack[1]}</span>
            </div>
            {/*  specialDeffense */}
            <div className="list-of-stats">
              <span>{pokemonData.specialDefense[0]}</span>
              <span>{pokemonData.specialDefense[1]}</span>
            </div>
            {/* speed */}
            <div className="list-of-stats">
              <span>{pokemonData.speed[0]}</span>
              <span>{pokemonData.speed[1]}</span>
            </div>
          </div>
          <h1 className="ability-header">{pokemonData.dataName.abilities}</h1>
          <div className="ability-names-block">
            <span>{pokemonData.abilities[0]}</span>
            <span>{pokemonData.abilities[1]}</span>
          </div>
        </div>
      </div>
    </>
  );
}
