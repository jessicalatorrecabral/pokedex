export const goToPokedex = (history) =>{
    history.push('/pokedex')
}
export const goToHomePage = (history) =>{
    history.push('/')
}
export const goToPokemonDetails = (history, name) =>{
    history.push(`/pokemon/${name}`)
}
