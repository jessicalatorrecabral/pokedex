import React from 'react'
import loading from '../../assets/images/loading.gif'
import { LoadingContainer } from './styled'

const Loading = () => {
    return(
        <LoadingContainer>
            <img src={loading}/>
        </LoadingContainer>
    )
}
export default Loading