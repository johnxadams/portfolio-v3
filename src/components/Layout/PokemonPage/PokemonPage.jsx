import React, { useState } from "react";
import LinkToGifPage from "../LinkToGifPage/LinkToGifPage";
// import { pokemonStatsNaming } from "../../../data";
// fetch Data
const getPokemonData = async (pokemonName) => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  );
  const pokeData = await response.json();
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
    defense: "",
    specialAttack: "",
    specialDefense: "",
    Abilities: "",
    speed: "",
    type: "",
    dataName: "",
  });
  const [pokemonName, setPokemonName] = useState("");
  // const [pokemonChosen, setPokemonChosen] = useState("false");
  // const [pokeStats, setPokeStats] = useState({});
  const handlePokemonName = (e) => {
    e.preventDefault();
    console.log(pokemonName);
    setPokemonName(e.target.value.toLowerCase());
  };
  const handlePokemonSearchBtn = (e) => {
    e.preventDefault();
    if (!pokemonName) return;
    getPokemonData(pokemonName).then((pokeData) => {
      console.log("pokeData: ", pokeData);

      setPokemonData({
        name: pokemonName,
        species: pokeData.species.name,
        img: pokeData.sprites.front_default,
        // hp: {hpNr: pokeData.stats[0].base_stat, hpName: pokeData.stats[0].stat.name},
        hp: [
          // because for some reason this dosnt work as an object!!!
          pokeData.stats[0].stat.name,
          pokeData.stats[0].base_stat,]
        ,
        attack: {
          attackName: pokeData.stats[1].stat.name,
          attackStat: pokeData.stats[1].base_stat,
        },
        defense: "",
        specialAttack: "",
        specialDefense: "",
        abilities: pokeData.abilities[0].ability.name,
        // attack: pokeData.stats[1].base_stat,
        type: pokeData.types[0].type.name,
        dataName: {stats: "stats", abilities: "abilities" }
      });
      setPokemonName("");
    });
    // setPokeStats(pokemonStatsNaming)
  };
  // trrying to grab the object keys and use is as a string for naming the stats
  // let [first, second] = Object.keys(setPokemonData);
  // console.log("pokeData", pokemonData);
  // console.log("pokeStats ", pokeStats);
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
          <h5>{pokemonData.name.toUpperCase()}</h5>
          <div className="pokemon-img-container">
            <img src={pokemonData.img} alt={pokemonData.name} />
          </div>
          <h2 className="stats-header">{pokemonData.dataName.stats}</h2>
          <div className="stats-container">
            <div className="list-of-stats">
              {/* this is HP */}
              <span>{pokemonData.hp[0]}</span>
              <span>{pokemonData.hp[1]}</span>
            </div>
            <div className="list-of-stats">
              {/* This is ATTACK */}
              <span>{pokemonData.attack.attackName}</span>{" "}
              <span>{pokemonData.attack.attackStat}</span>
            </div>
            <div className="list-of-stats">
              <span>hp</span> <span>{pokemonData.hp[0]}</span>
            </div>
            <div className="list-of-stats">
              <span>hp</span> <span>{pokemonData.hp}</span>
            </div>
            <h1>{pokemonData.Abilities}</h1>
           <h1>{pokemonData.dataName.abilities}</h1>
          </div>
          <h1>{pokemonData.hp}</h1>
        </div>
        {/* <PokestatsContainer/> */}
        <LinkToGifPage />
      </div>
    </>
  );
}
