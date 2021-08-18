import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import { goToHomePage } from '../../routes/coordinator'
import GlobalStateContext from '../../global/GlobalStateContext'
import {PokemonCardContainer} from './styled'
import PokemonCard from '../../components/PokemonCard/PokemonCard'



const PokedexPage = () => {

    const {pokedex} = useContext(GlobalStateContext)
    console.log(pokedex)

    const history = useHistory()
    return(
        <>
            <Header 
                title={"Pokédex"}
                HeaderButtonToExchange={() => goToHomePage(history)}
            />
            
            <PokemonCardContainer>
                {pokedex && pokedex.map((poke) => {
                    return <PokemonCard key={poke.name} inPokedexPage pokemon={poke}/>
                })}
            </PokemonCardContainer> 
            
        </>
    )
}
export default PokedexPage