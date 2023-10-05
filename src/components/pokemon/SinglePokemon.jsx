import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail"


export default function SinglePokemon() {
const [pokemon, setPokemon] = useState([])
const { id } = useParams();
const fetchData = async () => {
        const data = await fetch(`https://pokifight-backend.onrender.com/api/pokemon/${id}`)
        const res = await data.json();
        setPokemon(res.pokemon);
        }
  
  useEffect(() => {
    fetchData();
  }, []);
console.log(pokemon);
  if (pokemon) {
    console.log(pokemon?.name?.english);
  } else {
    console.log("Pokemon object is undefined");
  }
    return (
        <>
        {pokemon.name ? (
          <div>
          <h1>{pokemon?.name?.english}</h1>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={pokemon?.name?.english} width="300px" />
          <br/><Link to={`/pokemon/${id}/base`} element={<PokemonDetail name = {pokemon?.name?.english} />}>Stats</Link>
          <br/><Link to={`/pokemon/${id}/type`} element={<PokemonDetail name = {pokemon?.name?.english} />}>Type</Link>
          <br/><Link to={`/pokemon/${id}/name`} element={<PokemonDetail name = {pokemon?.name?.english} />}> Different Names</Link>
          </div> ) : null}
                          
        </>
    )
}