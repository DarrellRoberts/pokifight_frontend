import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePokemon from "./SinglePokemon";
import Gamecoin from "../../assets/gamecoin.wav"
import { Howl } from "howler";
import Randomiser from "./Randomiser";
import PokemonView from "./Pokemonview";

export default function Pokemon({ searchBar }) {
  const [pokemon, setPokemon] = useState([]);

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
  
  const playSound = () => {
    const sound = new Howl({
        src: [Gamecoin],
        volume: 0.15
    });
    sound.play();
}
  return (
    <div style={{ backgroundColor: "black" }}>
      <Randomiser pokemon={pokemon}/>
      {pokemon.map((p, index) => (
        <div style={{ display: "inline-flex", margin: "20px" }} key={index}>
          <PokemonView onMouseEnter={playSound}  p={p} />
        </div>
      ))}
    </div>
  );
}
