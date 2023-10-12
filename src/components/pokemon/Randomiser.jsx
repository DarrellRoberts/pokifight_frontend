import { Card, Button, Space } from "antd";
import { DoubleLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import SinglePokemon from "./SinglePokemon";
import { Howl } from "howler";
import Roulette from "../../assets/roulette.wav";
import CreatePostPokemonForBattle from "../Createpostdata";

export default function Randomiser({ pokemon }) {
  const [imageId, setImageId] = useState(0);
  const [randomPoke, setRandomPoke] = useState([]);
  const [show, setShow] = useState(true);
  const [opponentSelect, setOpponentSelect] = useState(false);
  const { Meta } = Card;

  const fetchData = async () => {
    const data = await fetch(
      `https://pokemon-backend-ydlf.onrender.com/api/pokemon`
    );
    const res = await data.json();
    setRandomPoke(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [rSound] = useState(
    new Howl({
      src: [Roulette],
      volume: 0.15,
    })
  );
  const playSound = () => {
    rSound.play();
  };
  const stopSound = () => {
    rSound.stop();
  };

  const randomiser = () => {
    try {
      if (randomPoke) {
        const Int = setInterval(() => {
          playSound();
          setImageId(Math.floor(Math.random() * 809) + 1);
          setShow(false);
        }, 75);
        setTimeout(() => {
          clearInterval(Int);
          setShow(true);
          stopSound();
        }, 3000);
      } else {
        return setImageId(0);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const handleOpponentSelect = () => {
    setOpponentSelect(!opponentSelect);
  };

  //send data to post to the backend
  const handleData = () => {
    CreatePostPokemonForBattle(pokemon, randomPoke[imageId - 1]);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "0% 0%",
        }}
        className="randomiser"
      >
        {show && !opponentSelect ? (
          <Space className="site-button-ghost-wrapper" wrap>
            <Button
              onClick={randomiser}
              type="primary"
              danger
              style={{ marginBottom: "5%" }}
            >
              Choose your opponent!
            </Button>
          </Space>
        ) : null}
        {imageId === 0 ? (
          <Link>
            <Card
              className="opponentCard"
              hoverable
              style={{ width: 300 }}
              cover={
                <img
                  alt={randomPoke[imageId - 1]?.name.english}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
                />
              }
            >
              <Meta
                title={randomPoke[imageId - 1]?.name.english}
                description="Info"
              />
            </Card>
          </Link>
        ) : (
          <Card
            className="opponentCard"
            hoverable
            style={{ width: 300, marginBottom: "10%" }}
            cover={
              <img
                alt={randomPoke[imageId - 1]?.name.english}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
              />
            }
          >
            <Meta
              title={randomPoke[imageId - 1]?.name.english}
              description={randomPoke[imageId - 1]?.type[0]}
            />
            <br />
            <div className="stats" style={{ display: "grid" }}>
              <label>
                Health
                <input
                  type="range"
                  max="200"
                  value={randomPoke[imageId - 1]?.base.HP}
                />
              </label>
              <label>
                {" "}
                Attack
                <input
                  type="range"
                  max="200"
                  value={randomPoke[imageId - 1]?.base.HP}
                />
              </label>
              <label>
                {" "}
                Defence
                <input
                  type="range"
                  max="200"
                  value={randomPoke[imageId - 1]?.base.Defense}
                />
              </label>
              <label>
                {" "}
                Speed
                <input
                  type="range"
                  max="200"
                  value={randomPoke[imageId - 1]?.base.Speed}
                />
              </label>
              <br />
              <label>
                {" "}
                Special Defence🛡️
                <input
                  type="range"
                  max="100"
                  value={randomPoke[imageId - 1]?.base["Sp. Defense"]}
                />
              </label>
              <label>
                {" "}
                Special Attack⚔️
                <input
                  type="range"
                  max="100"
                  value={randomPoke[imageId - 1]?.base["Sp. Attack"]}
                />
              </label>
              <br />
            </div>
            {!opponentSelect ? (
              <Button
                onClick={handleOpponentSelect}
                danger
                style={{ marginBottom: "5%" }}
              >
                +
              </Button>
            ) : (
              <>
                <Button onClick={handleOpponentSelect} type="primary" danger>
                  Opponent Selected!
                </Button>
                <span>
                  <Link to="/pokemon/game">
                    <Button
                      onClick={handleData}
                      primary
                      danger
                      style={{ marginTop: "5%" }}
                    >
                      Start Game🎮
                    </Button>
                  </Link>
                  <DoubleLeftOutlined className="arrow" />
                </span>
              </>
            )}
          </Card>
        )}
      </div>
    </>
  );
}
