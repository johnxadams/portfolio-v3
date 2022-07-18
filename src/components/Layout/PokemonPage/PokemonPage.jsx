import React, { useState } from "react";
import LinkToGifPage from "../LinkToGifPage/LinkToGifPage";

// fetch Data
const getPokemonData = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await response.json();
  console.log(pokeData);
  return pokeData;
};

export default function PokemonPage() {
  // useStates
  const [pokemonData, setPokemonData] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    type: "",
  });
  const [pokemonName, setPokemonName] = useState("");
  // const [pokemonChosen, setPokemonChosen] = useState("false");

  const handlePokemonName = (e) => {
    e.preventDefault();
    console.log(pokemonName);
    setPokemonName(e.target.value.toLowerCase());
  };
  const handlePokemonSearchBtn = (e) => {
    e.preventDefault();
    if (!pokemonName) return;
    getPokemonData(pokemonName).then((pokeData) => {
      setPokemonData({
        name: pokemonName,
        species: pokeData.species.name,
        img: pokeData.sprites.front_default,
        hp: pokeData.stats[0].base_stat,
        attack: pokeData.stats[1].base_stat,
        type: pokeData.types[0].type.name,
      });
      setPokemonName("");
    });
  };

  return (
    <>
      <div>
        <form id="form-tag">
          <input
            onChange={handlePokemonName}
            type="text"
            id="pokemon-input"
            placeholder="search pokemon"
            value={pokemonName}
          />
          <button onClick={handlePokemonSearchBtn} id="search-btn">
            Search
          </button>
        </form>
        <div id="poke-container">
          <h1>{pokemonData.name}</h1>
          <h1>{pokemonData.hp}</h1>
        </div>
        {/* <PokestatsContainer/> */}
        <LinkToGifPage />
      </div>
    </>
  );
}
