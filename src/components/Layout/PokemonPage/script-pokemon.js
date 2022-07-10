const form = document.getElementById("form");
const pokemonInput = document.getElementById("pokemon-input");
const button = document.getElementById("search-btn");
const pokeContainer = document.getElementById("poke-container");



export default async function displayPokemon(e) {
  // e.preventDefault()

  const userInputText = pokemonInput.value.toLowerCase();
  const receive = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${userInputText}`
  );
  // console.log(receive);
  const posts = await receive.json();
 
  console.log("posts stats [0] " ,posts.stats[0].base_stat, posts.stats[0].stat.name, posts.stats);
  console.log("posts stats abilities ", posts.abilities[0].ability.name);
  pokeContainer.innerHTML += `<h5 class="poke-name">${posts.name.toUpperCase()}</h5>
                            <div class="img-container ">
                              <img src="${posts.sprites.front_default}">
                            </div>
                            <div class="stats-ability-header">stats</div>
                            <div id="stats-div">
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[0].stat.name}</span><span class="stats-amount">${posts.stats[0].base_stat}</span>
                              </div>
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[1].stat.name}</span><span class="stats-amount">${posts.stats[1].base_stat}</span>
                              </div>
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[2].stat.name}</span><span class="stats-amount">${posts.stats[2].base_stat}</span>
                              </div>
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[3].stat.name}</span><span class="stats-amount">${posts.stats[3].base_stat}</span>
                              </div>
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[4].stat.name}</span><span class="stats-amount">${posts.stats[4].base_stat}</span>
                              </div>
                              <div class="list-of-stats">
                                <span class="stats-name">${posts.stats[5].stat.name}</span><span class="stats-amount">${posts.stats[5].base_stat}</span>
                              </div>
                            </div>
                            <div class="stats-ability-header">abilities</div>
                            <div class="ability-names-block">
                              <div>${posts.abilities[0].ability.name}</div>
                              <div>${posts.abilities[1].ability.name}</div>
                            </div>`;
}


button.addEventListener("click", (e) => {
  e.preventDefault();
  displayPokemon();
  pokeContainer.innerHTML = "";
});

// fetch('https://pokeapi.co/').then((resolve) => console.log(resolve))
