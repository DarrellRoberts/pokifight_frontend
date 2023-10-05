import { useParams, NavLink } from "react-router-dom"
import { useState, useEffect } from "react"

export default function PokemonDetail({ name }) {
    const [pokemon, setPokemon] = useState([])
    const { id, info } = useParams()
    const fetchData = async () => {
        const data = await fetch(`https://pokifight-backend.onrender.com/api/pokemon/${id}/${info}`)
        const res = await data.json();
        setPokemon(res);
        }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(pokemon);
  console.log(name);
    return (
        <>
        <br/> <NavLink to={`/pokemon/${id}`}> Pokemon Overview</NavLink>
        <ul>
        {/* Base */}
        {pokemon.base ? <li>Health: {pokemon.base.HP}</li> : null}
        {pokemon.base ? <li>Attack: {pokemon.base.Attack}</li> : null}
        {pokemon.base ? <li>Defense: {pokemon.base.Defense}</li> : null}
        {pokemon.base ? <li>Special Attack: {pokemon.base["Sp. Attack"]}</li> : null}
        {pokemon.base ? <li>Special Defense: {pokemon.base["Sp. Defense"]}</li> : null}
        {pokemon.base ? <li>Speed: {pokemon.base.Speed}</li> : null}
        {/* Type */}
        {pokemon.type ? <li>Type: {pokemon.type}</li> : null}
        {/* Name */}
        {pokemon.name ? <li>English Name: {pokemon.name.english}</li> : null}
        {pokemon.name ? <li>French Name: {pokemon.name.french}</li> : null}
        {pokemon.name ? <li>Chinese Name: {pokemon.name.chinese}</li> : null}
        {pokemon.name ? <li>Japanese Name: {pokemon.name.japanese}</li> : null}
        </ul>
        </>
    )
}