import React from 'react'
import {FooterContainer, Mensagem} from './styled'
import coracao from '../../assets/images/coracao.png'
import github from '../../assets/images/github.svg'
import linkedin from '../../assets/images/linkedin.svg'

const Footer = () =>{
    return(
        <FooterContainer>
            <Mensagem>
                <p><strong>Olá,</strong> me chamo Jessica e desenvolvi esse pequeno projeto durante meu bootcamp na Labenu. Se quiser conhecer meus outros projetos, acesse minhas redes aqui embaixo 😄</p>
            </Mensagem>
            <div>
                <a href={'https://github.com/jessicalatorrecabral'} target={'_blank'}>
                    <img  src={github}/>
                </a>
                <a href={'linkedin.com/in/jessicalatorre182/'} target={'_blank'}>
                    <img  src={linkedin}/>
                </a>
            </div>
            <div>
                <p>Desenvolvido com</p> <img src={coracao}/> <p>por Jessica Latorre</p>
            </div>
        </FooterContainer>

    )
}
export default Footer