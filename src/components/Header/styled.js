import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background-color: rgb(219, 82, 77);
    height: 25vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px){
        width: 100vw;
        height: 20vh;
        

        
    }

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

    @media(max-width: 1080px){
        display: none;
        
        
    }
`

export const PokemonLogo = styled.img`
    width: 20vw;
    cursor: pointer;

    @media(max-width: 800px){
        width: 90vw;
        height: 20vh;
    }
    
`

export const HeaderButton = styled.button`
    margin-right: 5%;
    border: none;
    background-color: white;
    color: red;
    font-family: 'Press Start 2P', cursive;
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;

    @media(max-width: 1080px){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30vw;
        margin: 0 auto;
        font-size: 10px;
    }
`

