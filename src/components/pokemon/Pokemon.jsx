import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SinglePokemon from "./SinglePokemon"

export default function Pokemon() {
const [pokemon, setPokemon] = useState([]);

const fetchData = async () => {
const data = await fetch("https://pokifight-backend.onrender.com/api/pokemon")
const res = await data.json();
setPokemon(res.data);
}

useEffect(() => {
    fetchData()
}, []);
console.log(pokemon);
console.log(pokemon.map((p) => p.name.english))
    return (
        <>
        {pokemon.map((p, index) =>
        <div style={{display: "inline-flex", margin: "20px"}} key={index}>
        <Link to={`/pokemon/${p.id}`} element={<SinglePokemon />}> <h3> {p.name.english} </h3> </Link>
            </div>
        )}
        </>
    )
}