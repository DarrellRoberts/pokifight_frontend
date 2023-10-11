import { Link } from "react-router-dom";
import SinglePokemon from "./SinglePokemon";
import { Card, Button, Space } from "antd";
import Gamecoin from "../../assets/gamecoin.wav";
import { Howl } from "howler";
import { useState } from "react";

function PokemonView({ p }) {
  const [selected, setSelect] = useState(false);
  const { Meta } = Card;

  const playSound = () => {
    const sound = new Howl({
      src: [Gamecoin],
      volume: 0.15,
    });
    sound.play();
  };

  const handlePokemonSelect = () => {
    setSelect(!selected);
  };
  return (
    <div
      className="pokeContainer"
      style={{
        display: "inline-flex",
        margin: "20px",
        flexDirection: "column",
      }}
    >
      <Link to={`/pokemon/${p.id}`}>
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
          <hr />
          <Meta title={p.name.english} description={p.type[0]} />
        </Card>
      </Link>
      {!selected ? (
        <Space wrap>
          <Button
            onClick={handlePokemonSelect}
            danger
            style={{ marginTop: "20px" }}
          >
            {" "}
            +
          </Button>
        </Space>
      ) : (
        <Space wrap>
          <Button
            danger
            type="primary"
            style={{ marginTop: "20px" }}
            onClick={handlePokemonSelect}
            primary
          >
            {" "}
            Pokemon Selected!
          </Button>
        </Space>
      )}
    </div>
  );
}

export default PokemonView;
