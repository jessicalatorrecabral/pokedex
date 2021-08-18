import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: rgb(219, 82, 77);
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
export const ImagesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
`
export const Pokeball= styled.img`
    width: 5vw;
    cursor: pointer;
`

export const PokemonLogo = styled.img`
    width: 20vw;
    cursor: pointer;
    
`

export const HeaderButton = styled.button`
    margin-right: 5%;
    border: none;
    background-color: white;
    color: red;
    font-family: 'Press Start 2P', cursive;
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
`

