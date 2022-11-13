const pokemonApi = {}

function convertPokeApiDetailToPokemon(pokemonDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokemonDetail.order
    pokemon.name = pokemonDetail.name
    pokemon.types = pokemonDetail.types.map((typeSlot) => {
        typeSlot.type.name
    })
    pokemon.type = pokemonDetail.types.get(0)
    pokemon.photo = pokemonDetail.sprites.other.dream_world.front_default
    return pokemon
}

pokemonApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then((pokemon) => convertPokeApiDetailToPokemon(pokemon))
}

pokemonApi.getPokemons = ( offset = 0, limit = 10) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody.results))
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
}