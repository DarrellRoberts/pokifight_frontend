import { useEffect, useState } from "react";
import PokemonView from "./Pokemonview";
import SearchBar from "../Searchbar";
import PokemonTitle from "./PokemonTitle";
import Spinner from "../Spinner"

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

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ color: "red", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="greyContainer" style={{backgroundColor: "rgba(100, 100, 100, 0.4)", borderRadius: "20px", width: "80%", minHeight: "100vh", marginBottom: "10px"}}>
      <PokemonTitle />
      <SearchBar setSearchBar={setSearchBar} />
      <br />
      {isLoading ? (
        <Spinner />
      ) : null}
      {pokemon.length > 0 && !isLoading
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
