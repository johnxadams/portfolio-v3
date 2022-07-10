import React, {useState, useEffect} from 'react'

// import displayPokemon from './script-pokemon'

export default function PokemonPage() {
    const [pokemonName, setPokemonName] = useState("");
    const handlePokemonName = (e) => {
        e.preventDefault()
        console.log(pokemonName);
        setPokemonName(e.target.value)
        // setPokemonName("")
    }


        const [state, setState] = useState();
        const getData = () => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((response) => response.json())
            .then((data) => setState(data))
          }
          
        //   useEffect(() => {
        //       console.log("this is useEffect");
        //       getData();
        //   }, [])

          const handlePokemonSearchBtn = (e) => {
            e.preventDefault()
            getData()
        } 
    

  return (
      <>
        <div>
            <form id="form-tag">
                <input onChange={handlePokemonName} type="text" id="pokemon-input" placeholder="search pokemon" autofocus />
                <button onClick={handlePokemonSearchBtn} id="search-btn">Search</button>
            </form>
            <div id="poke-container"></div>
        </div>
      </>
  )
}
