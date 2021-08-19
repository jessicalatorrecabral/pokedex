import React, { useContext, useEffect, useState } from 'react'
import { PokemonDetailsContainer, FirstContainer, NameBox, ImagesBox, SecondContainer, ContainerTitle, ThirdContainer, TypeBox, AttackBox } from './styled'
import Header from '../../components/Header/Header'
import { useHistory, useParams } from 'react-router-dom'
import GlobalStateContext from '../../global/GlobalStateContext'




const PokemonDetailsPage = (props) => {
    

    const history = useHistory()
    const [chosedPokemon, setChosedPokemon] = useState({})
    const {name, pokedexPage} = useParams()
    const {pokemons, pokedex} = useContext(GlobalStateContext)
    // const {pokedex} = useContext(GlobalStateContext)
    
  
    

    console.log(chosedPokemon)

    useEffect(()=> {
        let thisPokemon
        if(!pokedexPage){
            thisPokemon = pokemons.find((poke)=> {
                return poke.name === name
            }) 
            
            setChosedPokemon(thisPokemon)

        }
        

        else if(pokedexPage){
             thisPokemon = pokedex.find((poke)=> {
                return poke.name === name
            }) 
        }

        setChosedPokemon(thisPokemon)
       
    },[])
   

    return(
        <div>
            <Header  
                title={"Detalhes"}
                HeaderButtonToExchange={() =>history.goBack()}/>
            <PokemonDetailsContainer>
                {chosedPokemon && chosedPokemon.sprites &&
                <FirstContainer>
                    <NameBox>
                        <p>{chosedPokemon && chosedPokemon.name}</p>
                    </NameBox>
                    <ImagesBox>
                        <img src={chosedPokemon.sprites.front_default}/>
                    </ImagesBox>
                    <ImagesBox>
                        <img src={chosedPokemon.sprites.back_default}/>
                    </ImagesBox>
                </FirstContainer>
                }

                <SecondContainer>
                    <ContainerTitle>Stats</ContainerTitle>
                    {chosedPokemon && chosedPokemon.stats && chosedPokemon.stats.map((stat)=> {
                        return (
                            <p key={stat.stat.name}>
                                <strong>{stat.stat.name}:</strong> {stat.base_stat}
                            </p>
                        )
                    })}
                </SecondContainer>
                <ThirdContainer>
                    <TypeBox>
                        {chosedPokemon && chosedPokemon.types && chosedPokemon.types.map((item)=> {
                            return (
                                <p key={item.type.name}>
                                    {item.type.name}
                                </p>
                            )
                        })}
                    </TypeBox>
                    <AttackBox>
                        <ContainerTitle>Main Attacks</ContainerTitle>
                        {chosedPokemon && chosedPokemon.moves && chosedPokemon.moves.map((move, index)=> {
                            return ( index < 5 &&
                                <p key={move.move.name}>
                                    {move.move.name}
                                </p>
                            )
                        })}
                    </AttackBox>
                </ThirdContainer>
            </PokemonDetailsContainer>
        </div>
    )
}
export default PokemonDetailsPage