import Pokemon from "./pokemon/Pokemon";
import { NavLink } from "react-router-dom";
import SoundPlayer from "./SoundPlayer.jsx";
import Soundtrack from "../assets/soundtrack.mp3";
import SearchBar from "../components/Searchbar.jsx";
import { useState } from "react";
export default function Header({ setSearchBar }) {
  return (
    <>
      <NavLink
        to="pokemon"
        onClick={() => {
          setSearchBar("");
        }}
        element={Pokemon}
      >
        Pokemon
      </NavLink>
      <SoundPlayer soundtrackSrc={Soundtrack} />
    </>
  );
}
