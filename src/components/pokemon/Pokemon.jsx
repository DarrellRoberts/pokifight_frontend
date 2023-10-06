import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import SinglePokemon from "./SinglePokemon"
import { Card } from "antd";
import Gamecoin from "../../assets/gamecoin.wav"
import { Howl } from "howler";
import Randomiser from "./Randomiser";

export default function Pokemon() {
const [pokemon, setPokemon] = useState([]);

const { Meta } = Card;
const fetchData = async () => {
const data = await fetch("https://pokemon-backend-ydlf.onrender.com/api/pokemon")
const res = await data.json();
setPokemon(res)
}

useEffect(() => {
    fetchData()
}, []);

const playSound = () => {
    const sound = new Howl({
        src: [Gamecoin],
        volume: 0.15
    });
    sound.play();
}
    return (
        <div style={{backgroundColor: "black"}}>
        <Randomiser pokemon={pokemon}/>
        {pokemon.map((p, index) =>
        <div className="pokeContainer" style={{display: "inline-flex", margin: "20px"}} key={index}>
        <Link to={`/pokemon/${p.id}`} element={<SinglePokemon />}>
        <Card
        onMouseEnter={playSound} 
        hoverable
        style={{ width: 220 }}
    cover={<img alt={p.name.english} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`} />}
        >
        <Meta title={p.name.english} description="Info" />
  </Card> 
</Link>
            </div>
        )}
        </div>
    )
}