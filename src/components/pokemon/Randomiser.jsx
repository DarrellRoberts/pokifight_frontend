import { Card } from "antd";
import { Link } from "react-router-dom"
import { useState } from "react"
import SinglePokemon from "./SinglePokemon"

export default function Randomiser({ pokemon }) {
    const [imageId, setImageId] = useState(0);
    const { Meta } = Card;

    const p = pokemon;

    const randomiser = () => {
        if (p) {
        setImageId(p[Math.floor(Math.random() * 810) + 1]?.id);
        } else {
            return null
        }
      }

    return (
<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2% 0%"}} className= "randomiser">
    <button onClick={randomiser}>Lucky Dip</button>
        <Link to={`/pokemon/${imageId}`} element={<SinglePokemon />}>
            <Card 
            hoverable
            style={{ width: 220 }}
            cover={<img alt={p[imageId - 1]?.name.english} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
            >
        <Meta title={p[imageId - 1]?.name.english} description="Info" />
  </Card> 
</Link>
</div>
    )
}