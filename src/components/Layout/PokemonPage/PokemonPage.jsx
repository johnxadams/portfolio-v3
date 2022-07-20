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
    abilities: "",
    speed: "",
    dataName: "",
    classes: "",
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
          pokeData.stats[0].base_stat,
        ],
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
        dataName: { stats: "stats", abilities: "abilities" },
        classes: {
          imgContainer: "img-container",
          pokeNameContainer: "pokemon-name-container",
        }
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
          <div className={pokemonData.classes.pokeNameContainer}>
            {pokemonData.name.toUpperCase()}
          </div>
          <div className={pokemonData.classes.imgContainer}>
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
              <span>{pokemonData.defense[0]}</span>
              <span>{pokemonData.defense[1]}</span>
            </div>
            <div className="list-of-stats">
              <span>{pokemonData.specialAttack[0]}</span>
              <span>{pokemonData.specialAttack[1]}</span>
            </div>
            <div className="list-of-stats">
              <span>{pokemonData.specialDefense[0]}</span>
              <span>{pokemonData.specialDefense[1]}</span>
            </div>
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
        {/* <PokestatsContainer/> */}
        <LinkToGifPage />
      </div>
    </>
  );
}
