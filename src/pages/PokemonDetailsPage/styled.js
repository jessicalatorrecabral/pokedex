import styled from 'styled-components'

export const PokemonDetailsContainer = styled.div`
    display: flex;
    width: 80vw;
    margin: 55px auto;
    height: 80vh;
    padding: 32px;
    box-shadow: 3px 0 #2f2f2f,-3px 0 #2f2f2f, 0 -3px #2f2f2f, 0 3px #2f2f2f,6px 0 #2f2f2f, -6px 0 #2f2f2f, 0 -6px #2f2f2f, 0 6px #2f2f2f, 0 0 0 3px #2f2f2f, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
    background-color: #2f2f2f;
    

    @media(max-width: 800px){
        flex-direction: column;
        height: 100%;
        
    }
`
export const FirstContainer = styled.div`
    width:20%;
    margin: 32px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 800px){
        margin: 12px auto;
        flex-direction: row;
        width: 100%;
    


       
        
    }
    
`
export const NameBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: yellow;
    box-shadow: 3px 0 #2f2f2f,-3px 0 #2f2f2f, 0 -3px #2f2f2f, 0 3px #2f2f2f,6px 0 #2f2f2f, -6px 0 #2f2f2f, 0 -6px #2f2f2f, 0 6px #2f2f2f, 0 0 0 3px #2f2f2f, 9px 0  rgb(219, 82, 77),-9px 0  rgb(219, 82, 77),0 9px  rgb(219, 82, 77),  0 -9px  rgb(219, 82, 77), 0 -3px 0 3px  rgb(219, 82, 77), 0 3px 0 3px  rgb(219, 82, 77),3px 0 0 3px  rgb(219, 82, 77), -3px 0 0 3px  rgb(219, 82, 77);
    font-family: 'Press Start 2P', cursive;

    @media(max-width: 800px){
        font-size: 10px;
        padding: 4px;
        margin-right: 50px;
        margin-left: 8px;
        
        box-shadow: none;
        width: 10%;
      
      
        
    }
    
`

export const ImagesBox = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
    background-color: white;
    height: 35%;
        img{
            height: 100%;
            width: 80%;

            @media(max-width: 800px){
                height: 90px;
                width: 90px;
                
                
            }
        }

        @media(max-width: 800px){
            height: 100px;
          
            margin-right: 20px;
            width: 80px;
        }

`
export const SecondContainer = styled.div`
    margin: 32px 28px;
    width: 36%;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
    font-family: 'Press Start 2P', cursive;

    @media(max-width: 800px){
        width: 90%;
        font-size: 10px;
        margin: 32px auto;
    }

    
`
export const ContainerTitle = styled.h3`
    text-align: center;
    font-family: 'Press Start 2P', cursive;

`
export const ThirdContainer = styled.div`
    margin: 32px 28px;
    width: 36%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;

    @media(max-width: 800px){
        width: 90%;
        font-size: 10px;
        margin: 32px auto;
    }
`
export const TypeBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    box-shadow: 3px 0 #2f2f2f,-3px 0 #2f2f2f, 0 -3px #2f2f2f, 0 3px #2f2f2f,6px 0 #2f2f2f, -6px 0 #2f2f2f, 0 -6px #2f2f2f, 0 6px #2f2f2f, 0 0 0 3px #2f2f2f, 9px 0  rgb(219, 82, 77),-9px 0  rgb(219, 82, 77),0 9px  rgb(219, 82, 77),  0 -9px  rgb(219, 82, 77), 0 -3px 0 3px  rgb(219, 82, 77), 0 3px 0 3px  rgb(219, 82, 77),3px 0 0 3px  rgb(219, 82, 77), -3px 0 0 3px  rgb(219, 82, 77);
    color: yellow;
    font-family: 'Press Start 2P', cursive;
    justify-content: center;
        p:nth-child(1){
        margin-right: 12px;
    }

    @media(max-width: 800px){
        box-shadow: none;
        margin-bottom: 40px;
    }
`

export const AttackBox = styled.div`
    width: 100%;
    padding-left: 16px;
    height: 80%;
    display: flex;
    flex-direction: column;
    font-family: 'Press Start 2P', cursive;
    background-color: white;
    box-shadow: 3px 0 white,-3px 0 white, 0 -3px white, 0 3px white,6px 0 white, -6px 0 white, 0 -6px white, 0 6px white, 0 0 0 3px white, 9px 0 black,-9px 0 black,0 9px black,  0 -9px black, 0 -3px 0 3px black, 0 3px 0 3px black,3px 0 0 3px black, -3px 0 0 3px black;
    justify-content: center;
`