import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SinglePokemon from "./SinglePokemon"
import { Card } from "antd";

export default function Pokemon() {
const [pokemon, setPokemon] = useState([]);
const { Meta } = Card;
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
        <Link to={`/pokemon/${p.id}`} element={<SinglePokemon />}>
        <Card 
        hoverable
        style={{ width: 220 }}
    cover={<img alt={p.name.english} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} />}
        >
        <Meta title={p.name.english} description="Info" />
  </Card> 
</Link>
            </div>
        )}
        </>
    )
}