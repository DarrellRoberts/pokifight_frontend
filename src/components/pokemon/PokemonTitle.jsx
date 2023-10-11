import { useParams } from "react-router-dom";

export default function PokemonTitle({ pokemon }) {
  const { id } = useParams();
  let path = window.location.pathname;
  return (
    <>
      {path === "/pokemon" ? (
        <h1 style={{ textAlign: "center", color: "white", fontSize: "5rem" }}>
          Select your Pokemon!
        </h1>
      ) : null}
      {path === `/pokemon/${id}` ? (
        <h1
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
