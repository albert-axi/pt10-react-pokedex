import { useState, useEffect } from 'react'
import PokeCard from './PokeCard'

export default function PokeList(){

    const [pokemon, setPokemon] = useState([])

    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
        .then(res=>res.json())
        .then(({results})=>setPokemon(results))
    }, [])

    const renderPokemon = ()=>{
        return pokemon.map(({name, url})=>(<PokeCard key={name} name={name} url={url}/>))
    }

    return(
        <div id="poke-list">
            {renderPokemon()}
        </div>
    )
}