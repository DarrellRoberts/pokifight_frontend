import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail";
import { Card } from "antd";
import PokemonTitle from "./PokemonTitle";

export default function SinglePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const { id } = useParams();
  const { Meta } = Card;
  const fetchData = async () => {
    const data = await fetch(
      `https://pokemon-backend-ydlf.onrender.com/api/pokemon/${id}`
    );
    const res = await data.json();
    setPokemon(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(pokemon);
  if (pokemon) {
    console.log(pokemon?.name?.english);
  } else {
    console.log("Pokemon object is undefined");
  }
  return (
    <div style={{ backgroundColor: "black", height: "100vh" }}>
      <div className="greyContainer" style={{backgroundColor: "rgba(100, 100, 100, 0.4)", borderRadius: "20px", width: "80%"}}>
      <PokemonTitle pokemon = {pokemon} />
      {pokemon.name ? (
        <div
          style={{
            backgroundColor: "black",
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
            <Meta title={pokemon.name.english} description="" />
            <br />
            <Link
              to={`/pokemon/${id}/base`}
              element={<PokemonDetail name={pokemon?.name?.english} />}
            >
              Stats
            </Link>
            <br />
            <Link
              to={`/pokemon/${id}/type`}
              element={<PokemonDetail name={pokemon?.name?.english} />}
            >
              Type
            </Link>
            <br />
            <Link
              to={`/pokemon/${id}/name`}
              element={<PokemonDetail name={pokemon?.name?.english} />}
            >
              {" "}
              Different Names
            </Link>
          </Card>
        </div>
      ) : null}
      </div>
    </div>
  );
}
