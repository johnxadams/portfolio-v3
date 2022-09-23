// react hook
import React, { useState } from 'react';

// utils
import { searchPokemon } from '../../../utils/pokemonPageUtils';

// react-icons
import { BsSearch } from 'react-icons/bs';

// styled-components
import { PokeSearchInput } from '../../StyledComponents/Input';
import { PokeSearchBtn } from '../../StyledComponents/Button';

//comments.js #1
// using fetch on purpose
const getPokemonData = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await response.json();
  return pokeData;
};

// rfc
export default function PokemonPage() {
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

  const handlePokemonSearch = (e) => {
    searchPokemon({
      e,
      pokemonName,
      getPokemonData,
      setPokemonData,
      setPokemonName,
    });
  };

  return (
    <>
      <div className="pokemon-container">
        <form id="form-tag" onSubmit={handlePokemonSearch}>
          <PokeSearchInput
            onChange={(e) => {
              setPokemonName(e.target.value.toLowerCase());
            }}
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
