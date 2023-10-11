import Pokemon from "./pokemon/Pokemon";
import { NavLink } from "react-router-dom";
import SoundPlayer from "./SoundPlayer.jsx";
import Soundtrack from "../assets/soundtrack.mp3";
import Leaderboard from "./game/Leaderboard";
import Homepage from "./Homepage";
export default function Header({ setSearchBar }) {
  return (
    <>
    <div className="header" style={{display: "inline-flex", justifyContent: "space-evenly", width: "100%"}}>
      <SoundPlayer soundtrackSrc={Soundtrack} />
      <NavLink
        to="/"
        element={<Homepage />}
      >
        Start
      </NavLink>
      <NavLink
        to="pokemon"
        onClick={() => {
          setSearchBar("");
        }}
        element={Pokemon}
      >
        Pokemon
      </NavLink>
      <NavLink
        to="leaderboard"
        onClick={() => {
          setSearchBar("");
        }}
        element={<Leaderboard/>}
      >
        Leaderboard
      </NavLink>
      </div>
    </>
  );
}
