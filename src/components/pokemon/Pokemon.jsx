import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import SinglePokemon from "./SinglePokemon";
import Randomiser from "./Randomiser";
import PokemonView from "./Pokemonview";
import SearchBar from "../Searchbar";
import PokemonTitle from "./PokemonTitle";

export default function Pokemon({ setSearchBar, searchBar }) {
  const [pokemon, setPokemon] = useState([]);

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
      const limited = res.slice(0, 10);
      setPokemon(limited);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchBar]);

  return (
    <div style={{ backgroundColor: "black", color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="greyContainer" style={{backgroundColor: "rgba(100, 100, 100, 0.4)", borderRadius: "20px", width: "80%"}}>
      <PokemonTitle />
      <SearchBar setSearchBar={setSearchBar} />
      <Randomiser />
      {pokemon.length > 0
        ? pokemon.map((p, index) => (
            <div style={{ display: "inline-flex", margin: "20px" }} key={index}>
              <PokemonView p={p} />
            </div>
          ))
        : "No result found"}
        </div>
    </div>
  );
}
