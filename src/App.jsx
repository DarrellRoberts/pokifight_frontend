import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import { Routes, Route, useParams } from "react-router-dom";
import Error from "./components/Error";
import Pokemon from "./components/pokemon/Pokemon";
import PokemonDetail from "./components/pokemon/PokemonDetail";
import SinglePokemon from "./components/pokemon/SinglePokemon";
import Game from "./components/game/Game"
import Leaderboard from "./components/game/Leaderboard"
import { useState } from "react";
import Paginate from "./components/Paginate"


function App() {
  const [searchBar, setSearchBar] = useState("");

  return (
    <>
      <Header setSearchBar={setSearchBar} />
      <Footer />
      <Routes>
        {/* Homepage */}
        <Route path="/" element={<Homepage />} />
        {/* First Page */}
        <Route
          path="pokemon"
          element={
            <Paginate setSearchBar={setSearchBar} searchBar={searchBar} PokemonPerPage={15}/>
          }
        />
        {/* Second Page */}
        <Route path="/pokemon/:id" element={<SinglePokemon />} />

        {/* Game Page */}
        <Route path="/pokemon/game" element={<Game />} />

        {/* Leaderboard Page */}
        <Route path="/leaderboard" element={<Leaderboard />} />
        
        {/* Third page */}
        <Route path="/pokemon/:id/:info" element={<PokemonDetail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
