import React, { useContext } from 'react'
import Header from '../../components/Header/Header'
import PokemonCard from '../../components/PokemonCard/PokemonCard'
import {PokemonCardContainer} from './styled'
import GlobalStateContext from '../../global/GlobalStateContext'
import { goToPokedex } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Loading from '../../components/Loading/Loading'

const HomePage = () => {

    const history= useHistory()
    const {pokemons} = useContext(GlobalStateContext)

    console.log(pokemons)

    return(
        <div>
            <Header 
                title={"Lista de Pokémons"}
                HeaderButtonToExchange={() => goToPokedex(history)}
            />
            {pokemons ?
            <PokemonCardContainer>
                {pokemons.map((poke, index) => {
                    return (index  < 28 && <PokemonCard key={poke.name} pokemon={poke}/>
                )})}
            </PokemonCardContainer> : <Loading/>}
            <Footer/>
           
        </div>
    )
}
export default HomePage