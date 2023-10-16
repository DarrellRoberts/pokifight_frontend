import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Card, Button, Space } from "antd";
import PokemonTitle from "./PokemonTitle";
import Randomiser from "./Randomiser";
import { EllipsisOutlined } from '@ant-design/icons';
import { Divider, Tour } from 'antd';
import Tutorialimage1 from "../../assets/tutorialimage1.jpg"
import Tutorialimage2 from "../../assets/tutorialimage2.jpg"

export default function SinglePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelect] = useState(false);
  const { id } = useParams();
  const { Meta } = Card;
  const fetchData = async () => {
    const data = await fetch(
      `https://pokemon-backend-ydlf.onrender.com/api/pokemon/${id}`
    );
    const res = await data.json();
    setPokemon(res);
  };

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const [open, setOpen] = useState(false);
  const steps = [
    {
      title: 'Select your player',
      description: 'If you are satisfied, press this button to select the pokemon',
      target: () => ref1.current,
    },
    {
      title: 'Select your opponent',
      description: 'When you select your player, a box will open for you to select your opponent.',
      cover: (
        <img
          alt="tutorialimage1.png"
          src={Tutorialimage1}
        />
      ),
      target: () => ref2.current,
    },
    {
      title: 'Start game!',
      description: 'If you are satisfied with both players, start the game here',
      cover: (
        <img
          alt="tutorialimage2.png"
          src={Tutorialimage2}
        />
      ),
      target: () => ref3.current,
    },
  ];
  

  useEffect(() => {
    fetchData();
  }, []);
  if (pokemon) {
    // console.log(pokemon?.name?.english);
  } else {
    console.log("Pokemon object is undefined");
  }
  return (
    <>
      <div
        className="greyContainer"
        style={{
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: "20px",
          width: "80%",
        }}
      >
        {/* Tutorial */}
        <PokemonTitle pokemon={pokemon} />
        <Button type="primary" onClick={() => setOpen(true)}>
        Tutorial
      </Button>

      <Divider />

      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />


        <div
          className="singPokeContainer"
          style={{ display: "flex", alignItems: "center" }}
        >
          {pokemon.name ? (
            <div
              style={{
                // backgroundColor: "black",
                marginLeft: "5%",
                padding: "20px",
              }}
            >
              <Card
                hoverable
                style={{ width: 300 }}
                cover={
                  <img
                    alt={pokemon.name.english}
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  />
                }
              >
                <Meta
                  title={pokemon.name.english}
                  description={pokemon?.type}
                />
                <br />
                <div className="stats" style={{ display: "grid" }}>
                  <label>
                    Health
                    <input type="range" max="200" value={pokemon?.base.HP} />
                  </label>
                  <label>
                    {" "}
                    Attack
                    <input type="range" max="200" value={pokemon?.base.HP} />
                  </label>
                  <label>
                    {" "}
                    Defence
                    <input
                      type="range"
                      max="200"
                      value={pokemon?.base.Defense}
                    />
                  </label>
                  <label>
                    {" "}
                    Speed
                    <input type="range" max="200" value={pokemon?.base.Speed} />
                  </label>
                  <br />
                  <label>
                    {" "}
                    Special Defence🛡️
                    <input
                      type="range"
                      max="100"
                      value={pokemon?.base["Sp. Defense"]}
                    />
                  </label>
                  <label>
                    {" "}
                    Special Attack⚔️
                    <input
                      type="range"
                      max="100"
                      value={pokemon?.base["Sp. Attack"]}
                    />
                  </label>
                  <br />
                  {!selected ? (
                    <Space wrap>
                      <Button 
                      ref={ref1}
                      onClick={() => setSelect(true)}>
                        +
                      </Button>
                    </Space>
                  ) : (
                    <Space wrap>
                      <Button
                        type="primary"
                        onClick={() => setSelect(false)}
                        primary
                      >
                        {" "}
                        Pokemon Selected!
                      </Button>
                    </Space>
                  )}
                </div>
              </Card>
            </div>
          ) : null}
          {selected ? (
            <>
              <h2 style={{ color: "white", fontSize: "10rem", margin: "5%" }}>
                {" "}
                Vs.
              </h2>
              <Randomiser ref={ref2} pokemon={pokemon} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
