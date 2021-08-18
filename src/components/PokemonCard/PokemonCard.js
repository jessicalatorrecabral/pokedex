import React, { useContext } from 'react'
import {PokemonCardContainer, ImgContainer, PokemonCardButtons} from './styled'
import {goToPokemonDetails} from '../../routes/coordinator'
import {useHistory} from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext'

const PokemonCard = ({pokemon, inPokedexPage}) => {
  console.log(pokemon)
  const history = useHistory()

  const {pokemons, setPokemons, pokedex, setPokedex} = useContext(GlobalStateContext)

  const addPokemon = () => {
    const pokemonIndex = pokemons.findIndex((poke) => poke.name === pokemon.name)
    const newPokeList = [...pokemons]
    newPokeList.splice(pokemonIndex, 1)
    const orderedPokemonsList = newPokeList.sort((a,b) => {
      return a.id - b.id
  })

    const pokedexList = [...pokedex, pokemon]
    const orderedPokedexList = pokedexList.sort((a,b) => {
      return a.id - b.id
  })

    setPokedex(orderedPokedexList)
    setPokemons(orderedPokemonsList)
  }

  const removePokemon = () => {
    const pokemonIndex = pokedex.findIndex((poke) => poke.name === pokemon.name)
    const newPokedexList = [...pokedex]
    newPokedexList.splice(pokemonIndex, 1)
    const orderedPokedexList = newPokedexList.sort((a,b) => {
      return a.id - b.id
  })

    const newPokeList = [...pokemons, pokemon]
    const orderedPokemonsList = newPokeList.sort((a,b) => {
      return a.id - b.id
  })

    setPokedex(orderedPokedexList)
    setPokemons(orderedPokemonsList)

    
  }

    return(
        <PokemonCardContainer>
          <ImgContainer>
            <img src={pokemon.sprites && pokemon.sprites.versions['generation-v']['black-white'].animated.front_default} alt={pokemon.name}/>
          </ImgContainer>
          
          <p>{pokemon.name}</p>
          <PokemonCardButtons>

            <button onClick={inPokedexPage ? removePokemon : addPokemon}>{inPokedexPage ? "Remove" : "Add"}</button>

            <button onClick={ ()=>goToPokemonDetails(history, pokemon.name) }>Details</button>

          </PokemonCardButtons>
          
          
        </PokemonCardContainer>
    )
}
export default PokemonCard