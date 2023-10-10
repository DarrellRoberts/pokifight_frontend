import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PokemonDetail from "./PokemonDetail";
import { Card, Button, Space } from "antd";
import PokemonTitle from "./PokemonTitle";
import Randomiser from "./Randomiser";

export default function SinglePokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [selected, setSelect] = useState(false)
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

  const handlePokemonSelect = (pokemonId) => {
    if (selected === pokemonId) {
      setSelect(null);
    } else {
      setSelect(pokemonId)
    }
  }
  return (
    <>
      <div className="greyContainer" style={{backgroundColor: "rgba(100, 100, 100, 0.4)", borderRadius: "20px", width: "80%"}}>
      <PokemonTitle pokemon = {pokemon} />
      <div className="singPokeContainer" style={{display: "flex", alignItems: "center"}}>   
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
            <Meta title={pokemon.name.english} description={pokemon?.type} />
            <br />
            <div className="stats">
              <label>Health
              <input type="range" max="200" value={pokemon?.base.HP} />
              </label>
              <br/>
              <label> Attack
              <input type="range" max="200" value={pokemon?.base.HP} />
              </label>
              <br/>
              <label> Defence
              <input type="range" max="200" value={pokemon?.base.Defense} />
              </label>
              <br/>
              <label> Speed
              <input type="range" max="200" value={pokemon?.base.Speed} />
              </label>
              <br/>
              {!selected ? (  
              <Space wrap>
              <Button 
              onClick={() => setSelect(true)} 
              danger> +</Button>
              </Space>) : (
              <Space wrap>
              <Button 
              danger
              type="primary"
              onClick={() => setSelect(false)} 
              primary> Pokemon Selected!</Button>
              </Space>
              )}
            </div>
            {/* <Link
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
            </Link> */}
          </Card>
        </div>
      ) : null}
          {selected ? (
            <>
          <h2 style={{color: "white", fontSize:"10rem", margin: "5%"}}> Vs.</h2>
        <Randomiser />
        </>) : null
      }
</div>
      </div>
      </>
  );
}
