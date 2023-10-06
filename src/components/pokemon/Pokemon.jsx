import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePokemon from "./SinglePokemon";
import { Card } from "antd";

import PokemonView from "./Pokemonview";
import SearchBar from "../Searchbar";

export default function Pokemon({ setSearchBar, searchBar }) {
  const [pokemon, setPokemon] = useState([]);
  const [imageId, setImageId] = useState(0);

  const { Meta } = Card;
  const fetchData = async () => {
    if (searchBar) {
      const data = await fetch(
        `https://pokemon-backend-ydlf.onrender.com/api/pokemon/search?name=${searchBar}`
      );
      const res = await data.json();

      setPokemon(res);
    } else {
      const data = await fetch(
        "https://pokemon-backend-ydlf.onrender.com/api/pokemon"
      );
      const res = await data.json();
      // for testing purposes the number limited (memory consuming)
      // const limited = res.slice(0, 10);
      setPokemon(res);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchBar]);

  const randomiser = () => {
    if (pokemon) {
      setImageId(pokemon[Math.floor(Math.random() * 810) + 1]?.id);
    } else {
      return null;
    }
  };
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
        <SearchBar setSearchBar={setSearchBar} />
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
      <div className="container-temp-font">
        {pokemon.length > 0
          ? pokemon.map((p, index) => (
              <div
                style={{ display: "inline-flex", margin: "20px" }}
                key={index}
              >
                <PokemonView p={p} />
              </div>
            ))
          : "No result found"}
      </div>
    </div>
  );
}
