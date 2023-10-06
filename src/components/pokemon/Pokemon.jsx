import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePokemon from "./SinglePokemon";
import { Card } from "antd";

import PokemonView from "./Pokemonview";

export default function Pokemon({ searchBar }) {
  const [pokemon, setPokemon] = useState([]);
  const [imageId, setImageId] = useState(0);

  const { Meta } = Card;
  const fetchData = async () => {
    if (searchBar) {
      const data = await fetch(
        `https://pokemon-backend-ydlf.onrender.com/api/pokemon/${searchBar}`
      );
      const res = await data.json();
      setPokemon([res]);
    } else {
      const data = await fetch(
        "https://pokemon-backend-ydlf.onrender.com/api/pokemon"
      );
      const res = await data.json();
      setPokemon(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchBar]);
  // console.log(pokemon.map((p) => p.name.english));
  const randomiser = () => {
    if (pokemon) {
      setImageId(pokemon[Math.floor(Math.random() * 810) + 1]?.id);
    } else {
      return null;
    }
  };
  // console.log(imageId);
  return (
    <div style={{ backgroundColor: "black" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2% 0%",
        }}
        className="randomiser"
      >
        <button onClick={randomiser}>Lucky Dip</button>
        <Link to={`/pokemon/${imageId}`} element={<SinglePokemon />}>
          <Card
            hoverable
            style={{ width: 220 }}
            cover={
              <img
                alt={pokemon[imageId - 1]?.name.english}
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${imageId}.png`}
              />
            }
          >
            <Meta
              title={pokemon[imageId - 1]?.name.english}
              description="Info"
            />
          </Card>
        </Link>
      </div>
      {pokemon.map((p, index) => (
        <div style={{ display: "inline-flex", margin: "20px" }} key={index}>
          <PokemonView p={p} />
        </div>
      ))}
    </div>
  );
}
