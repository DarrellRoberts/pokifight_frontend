import { Link } from "react-router-dom";
import SinglePokemon from "./SinglePokemon";
import { Card, Button, Space } from "antd";
import Gamecoin from "../../assets/gamecoin.wav"
import { Howl } from "howler";

function PokemonView({ p }) {
  const { Meta } = Card;

  const playSound = () => {
    const sound = new Howl({
        src: [Gamecoin],
        volume: 0.15
    });
    sound.play();
}  
  return (
    <div className="pokeContainer" style={{ display: "inline-flex", margin: "20px" }}>
      <Link to={`/pokemon/${p.id}`} element={<SinglePokemon />}>
        <Card
          onMouseEnter={playSound}
          hoverable
          style={{ width: 220 }}
          cover={
            <img
              alt={p.name.english}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            />
          }
        >
          <hr/>
          <Meta title={p.name.english} 
          description={p.type[0]} 
          />
        <Space wrap>
        <Button style={{marginTop: "20px", filter: "grayscale(0)"}}type="primary" danger> Select Pokemon</Button>
      </Space>
        </Card>
      </Link>
    </div>
  );
}

export default PokemonView;
