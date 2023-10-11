import { useEffect } from "react";

const CreatePostPokemonForBattle = async (pokemonSelected, pokemonOpponent) => {
  console.log(pokemonSelected, pokemonOpponent);
  const URL = "https://pokemon-backend-ydlf.onrender.com/api/pokemon/game/save";
  const fetchURL = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      pokemonSelected: pokemonSelected,
      pokemonOpponent: pokemonOpponent,
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

  useEffect(() => {
    fetchURL();
  }, []);
};

export default CreatePostPokemonForBattle;
