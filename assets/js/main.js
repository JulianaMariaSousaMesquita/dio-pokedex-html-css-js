function convertPokemonToLi(pokemon){
    return
        `<li class="pokemon">
        <span class="number">#001</span>
        <span class="name">${pokemon.name}</span>

        <div class="detail">
            <ol class="types">
                <li class="type">grass</li>
                <li class="type">poison</li>
            </ol> 
            <img src="https://seeklogo.com/images/B/bulbasaur-logo-8A27924C02-seeklogo.com.png" alt="Pokemon ${pokemon.name}"/>
        </div>        
    </li>`
}

const pokemonList = document.getElementById('pokemonList')

pokemonApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('')
})