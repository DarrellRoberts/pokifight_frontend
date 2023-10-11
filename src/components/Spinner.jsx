import PokemonImage from "../assets/PokemonImage.png";

export default function Spinner() {
    return (
        <>
              <div className="spinner">
              <img src={PokemonImage} alt="pokemon_logo" width="500px" />
              </div>
      </>
    )
}