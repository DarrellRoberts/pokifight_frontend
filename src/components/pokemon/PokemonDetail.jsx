import { useParams, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState([]);
  const { id, info } = useParams();
  const fetchData = async () => {
    const data = await fetch(
      `https://pokemon-backend-ydlf.onrender.com/api/pokemon/${id}/${info}`
    );
    const res = await data.json();
    setPokemon(res);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <br /> <NavLink to={`/pokemon/${id}`}> Pokemon Overview</NavLink>
      <ul>
        {/* Base */}
        {info === "base" ? <li>Health: {pokemon.HP}</li> : null}
        {info === "base" ? <li>Attack: {pokemon.Attack}</li> : null}
        {info === "base" ? <li>Defense: {pokemon.Defense}</li> : null}
        {info === "base" ? (
          <li>Special Attack: {pokemon["Sp. Attack"]}</li>
        ) : null}
        {info === "base" ? (
          <li>Special Defense: {pokemon["Sp. Defense"]}</li>
        ) : null}
        {info === "base" ? <li>Speed: {pokemon.Speed}</li> : null}
        {/* Type */}
        {info === "type" ? <li>Type: {pokemon}</li> : null}
        {/* Name */}
        {info === "name" ? <li>English Name: {pokemon.english}</li> : null}
        {info === "name" ? <li>French Name: {pokemon.french}</li> : null}
        {info === "name" ? <li>Chinese Name: {pokemon.chinese}</li> : null}
        {info === "name" ? <li>Japanese Name: {pokemon.japanese}</li> : null}
      </ul>
    </>
  );
}
