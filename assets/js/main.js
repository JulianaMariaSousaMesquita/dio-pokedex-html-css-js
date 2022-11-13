function convertPokemonToLi(pokemon){
    return
        `<li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
              ${pokemon.types.map((type) =>  `<li class="type ${pokemon.type}">${type}</li>`).join('')}
            </ol> 
            <img src="${pokemon.photo}" alt="Pokemon ${pokemon.name}"/>
        </div>        
    </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokemonApi.getPokemons().then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join('')
    pokemonList.innerHTML = newHtml
})