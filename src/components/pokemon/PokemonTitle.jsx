import { useParams } from "react-router-dom";

export default function PokemonTitle({ pokemon, username }) {
  const { id } = useParams();
  let path = window.location.pathname;
  return (
    <>
      {path === "/pokemon" && username ? (
        <h1 className="selectPokemon" style={{ textAlign: "center", color: "white", fontSize: "5rem" }}>
          {username}, <br/> Select your Pokemon!
        </h1>
      ) : null}
      {path === `/pokemon/${id}` ? (
        <h1
          className="selectPokemon"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "5rem",
            marginTop: "0px",
          }}
        >
          {pokemon?.name?.english}
        </h1>
      ) : null}
    </>
  );
}
