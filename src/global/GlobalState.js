import React, { useEffect, useState } from 'react'
import axios from 'axios'
//import BASE_URL from '../constants/urls/urls'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {

    const [pokemonNames, setPokemonNames] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [pokedex, setPokedex ] = useState([])

    console.log(pokemons)
    console.log(pokemonNames)

    useEffect(()=> {
        getPokemons()
    },[])

    useEffect(()=> {
        const pokemonList = []
        pokemonNames.forEach((poke) => {
            axios.get(poke.url)
            .then((response) => {
                pokemonList.push(response.data)
               //if(pokemonList.length === 21){}
                    const orderedPokemonsList = pokemonList.sort((a,b) => {
                        return a.id - b.id
                    })
                    setPokemons(orderedPokemonsList)
               

            })
            .catch((err)=> {
                console.log(err.message)

            })
        })

    },[pokemonNames])

    const getPokemons = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=0')
        .then((response)=> {
            setPokemonNames(response.data.results)
            console.log(pokemonNames)
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }

    const data = {pokemons, setPokemons, pokedex, setPokedex }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState