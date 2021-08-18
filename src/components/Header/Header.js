import React from 'react'
import {HeaderContainer, PokemonLogo, HeaderButton, Pokeball, ImagesContainer} from './styled'
import pokemonLogo from '../../assets/images/pokemonLogo.png'
import pokeball from '../../assets/images/pokeball.svg'
import { useHistory } from 'react-router-dom'
import {goToHomePage, goToPokedex} from '../../routes/coordinator'


const Header = ({title,HeaderButtonToExchange}) => {

    const headerButtonExchange = () => {
        switch (title) {
            case "Lista de Pokémons":
                return "Pokédex";
            case "Pokédex":
                return "Pokémons";
            default:
                return "Back";
        }
    }

    const history = useHistory()

    return(
        <HeaderContainer>
            <ImagesContainer>
                < PokemonLogo src={pokemonLogo} title='Home Page' alt='Pokemon' onClick={()=>goToHomePage(history)}/>
                <a  href={'https://www.pokemon.com/br/'} target='_blank' >
                <Pokeball src={pokeball} title='Pokemon Official Page' alt='Pokebola' />

                </a>
            </ImagesContainer>
               
            <HeaderButton onClick={HeaderButtonToExchange}>
              {headerButtonExchange()}
            </HeaderButton>
            
        </HeaderContainer>
    )
}
export default Header