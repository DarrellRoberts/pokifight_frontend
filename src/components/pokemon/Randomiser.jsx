import { Card, Button, Space } from "antd";
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import SinglePokemon from "./SinglePokemon"
import { Howl } from "howler";
import Roulette from "../../assets/roulette.wav"

export default function Randomiser() {
    const [imageId, setImageId] = useState(0);
    const [randomPoke, setRandomPoke] = useState([]);
    const [show, setShow] = useState(true);
    const { Meta } = Card;

    const fetchData = async () => {
          const data = await fetch(
            `https://pokemon-backend-ydlf.onrender.com/api/pokemon`
          );
          const res = await data.json();
          setRandomPoke(res);
          }
    
    useEffect(() => {
        fetchData();
    }, [] ) 

    const [rSound] = useState(new Howl({ 
        src: [Roulette],
        volume: 0.15 }))
    const playSound = () => {
        rSound.play();
    }
    const stopSound = () => {
        rSound.stop();
    }

    const randomiser = () => {
    try {
        if (randomPoke) {
            const Int = setInterval(() => {
                playSound();
                setImageId(Math.floor(Math.random() * 809) + 1)
                setShow(false);
            }, 75);
            setTimeout(() => {
                clearInterval(Int);
                setShow(true)
                stopSound();
            }, 3000)
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
        {imageId === 0 ? (        
        <Link>
            <Card 
            hoverable
            style={{ width: 220 }}
            cover={<img alt={randomPoke[imageId - 1]?.name.english} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
            >
        <Meta title={randomPoke[imageId - 1]?.name.english} description="Info" />
  </Card> 
</Link>) : (
        <Link to={`/pokemon/${imageId}`} element={<SinglePokemon />}>
            <Card 
            hoverable
            style={{ width: 220 }}
            cover={<img alt={randomPoke[imageId - 1]?.name.english} 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`} />}
            >
        <Meta title={randomPoke[imageId - 1]?.name.english} description={randomPoke[imageId - 1]?.type[0]} />
  </Card> 
</Link>)}
</div>
    )
}