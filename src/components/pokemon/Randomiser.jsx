import { Card, Button, Space } from "antd";
import { Link } from "react-router-dom"
import { useState } from "react"
import SinglePokemon from "./SinglePokemon"

export default function Randomiser({ pokemon }) {
    const [imageId, setImageId] = useState(0);
    const [show, setShow] = useState(true);
    const { Meta } = Card;

    const p = pokemon;

    const randomiser = () => {
        if (p) {
            setInterval(() => {
                setImageId(p[Math.floor(Math.random() * 810) + 1]?.id)
                setShow(false);
            }, 50);
        } else {
            return null
      }
    }

    return (
<div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "2% 0%"}} className= "randomiser">
    {show ? (
    <Space className="site-button-ghost-wrapper" wrap>
        <Button 
        onClick={randomiser}
        type="dashed"
        style={{marginBottom: "10%"}} 
        ghost
        >
        Lucky Dip
        </Button>
    </Space>) : null}
        {show ? (
        <Link>
            <Card 
            hoverable
            style={{ width: 220 }}
            cover={<img alt={p[imageId - 1]?.name.english} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
            >
        <Meta title={p[imageId - 1]?.name.english} description="Info" />
  </Card> 
</Link>)
 : 
 (
        <Link to={`/pokemon/${imageId}`} element={<SinglePokemon />} >
            <Card 
            hoverable
            style={{ width: 220 }}
            cover={<img alt={p[imageId - 1]?.name.english} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
            >
        <Meta title={p[imageId - 1]?.name.english} description="Info" />
  </Card> 
</Link>)
 }
</div>
    )
}