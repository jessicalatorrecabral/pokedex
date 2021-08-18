import styled from "styled-components";

export const FooterContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    color: white;
    flex-direction: column;
    background-color: rgb(219, 82, 77);
    margin-top: 90px;
    

    div:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;

        img{
            max-width: 50px;
            &:hover{
                filter: brightness(1.2);
            }
        }
        img:nth-child(1){
            margin-right: 10px;
        }
    }

    div:nth-child(3){
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: 'Press Start 2P', cursive;
        font-size: 9px;

        img{
            max-width: 20px;
            margin-left: 6px;
            margin-right: 6px;
        }

    }
`

export const Mensagem = styled.div`
    padding: 10px;
    width: 40%;
    text-align: justify;
    font-style: italic;

    
`
