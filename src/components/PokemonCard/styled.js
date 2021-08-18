import styled from 'styled-components'

export const PokemonCardContainer = styled.div`
    margin: 40px auto;
    margin-left: 40px;
    width: 20vw;
    height: 50vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: 'Press Start 2P', cursive;
    text-transform: capitalize;
    color: yellow;
    background-color: #2f2f2f;
    box-shadow: 3px 0 #2f2f2f,-3px 0 #2f2f2f, 0 -3px #2f2f2f, 0 3px #2f2f2f,6px 0 #2f2f2f, -6px 0 #2f2f2f, 0 -6px #2f2f2f, 0 6px #2f2f2f, 0 0 0 3px #2f2f2f, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
        
        


`
export const ImgContainer = styled.div`
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
    margin-top:20px;
    width: 90%;
    display: flex;
    align-items: center;
    height:70%;
    background-color: white;
        img{
            margin: 10px auto;
            width:60%;
            height: 60%;
            padding: 20px;
        }
`
export const PokemonCardButtons = styled.div`
    display: flex;
    width: 80%;
    
    margin-bottom: 20px;
        button{
            background-color: white;
            font-family: 'Press Start 2P', cursive;
            width: 50%;
            border: none;
            color: red;
            box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
            &:hover{
                cursor:pointer;
            }
            
       
        }
        button:nth-child(1){
            margin-right: 20px;
        }
`