import { useState, useEffect } from 'react'

export default function PokeCard({name, url}){

    const [pokeChar, setPokeChar] = useState(null)

    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPokeChar(data))
    }, [])

    return(
        <div className="poke-card">
            <img src={pokeChar?.sprites.front_default} alt={name}/>
            <h3>{name}</h3>
        </div>
    )
}