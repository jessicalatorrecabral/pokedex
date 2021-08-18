import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from '../pages/PokedexPage/PokedexPage'
import PokemonDetailsPage from '../pages/PokemonDetailsPage/PokemonDetailsPage'


const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route exact path={'/pokedex'} component={PokedexPage}/>
            <Route exact path={'/pokemon/:name'} component={PokemonDetailsPage}/>
            <Route component={ErrorPage}/>
        
        </Switch>
        </BrowserRouter>
    )
}
export default Router