import React from 'react'
import {ImageError, TitleError, GoToHomeErrorPage, ContainerErrorPage} from './styled'
import error404 from '../../assets/images/error404A.png'
import { goToHomePage } from '../../routes/coordinator'
import { useHistory } from 'react-router-dom'

const ErrorPage = () => {
    const history = useHistory()
    return(
        <ContainerErrorPage>
            <TitleError>SORRY</TitleError>
           <ImageError>
               <img src={error404}/>
           </ImageError>
           <TitleError>Page not found</TitleError>
           <GoToHomeErrorPage onClick={()=>goToHomePage(history)}> Go home page</GoToHomeErrorPage>

        </ContainerErrorPage>
    )
}
export default ErrorPage