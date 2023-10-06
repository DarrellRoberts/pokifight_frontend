import { Link } from "react-router-dom";
import SinglePokemon from "./SinglePokemon";
import { Card } from "antd";

function PokemonView({ p }) {
  const { Meta } = Card;
  return (
    <div className="pokeContainer" style={{ display: "inline-flex", margin: "20px" }}>
      <Link to={`/pokemon/${p.id}`} element={<SinglePokemon />}>
        <Card
          hoverable
          style={{ width: 220 }}
          cover={
            <img
              alt={p.name.english}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            />
          }
        >
          <Meta title={p.name.english} description="Info" />
        </Card>
      </Link>
    </div>
  );
}

export default PokemonView;
