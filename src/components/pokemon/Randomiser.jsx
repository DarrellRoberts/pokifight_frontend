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
    try {
        if (p) {
            setInterval(() => {
                setImageId(Math.floor(Math.random() * 809) + 1)
                setShow(false);
            }, 5000);
        } else {
            return setImageId(0);
      }
    } catch(error) {
        console.error(error);
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
            cover={<img alt={p[imageId - 1]?.name.english} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
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
            <hr/>
        <Meta title={p[imageId - 1]?.name.english} description={p[imageId - 1]?.type[0]} />
  </Card> 
</Link>)
 }
</div>
    )
}