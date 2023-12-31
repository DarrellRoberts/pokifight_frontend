import { useState, useEffect } from "react";
import SearchBar from "./Searchbar";
import PokemonTitle from "./pokemon/PokemonTitle";
import PokemonView from "./pokemon/Pokemonview";
import Spinner from "./Spinner";
import  ReactPaginate  from 'react-paginate';


export default function Paginate({searchBar, setSearchBar, PokemonPerPage}) {
const [pokemon, setPokemon] = useState([]);
const [totalPages, setTotalPages] = useState(0);
const [itemOffset, setItemOffset] = useState(0);
const [isLoading, setIsLoading] = useState(true);
const [username, setUsername] = useState("");

const fetchUsername = async () => {
  const data = await fetch(
    "https://pokemon-backend-ydlf.onrender.com/api/pokemon/game/save/username"
  );
  const res = await data.json();
  setUsername(res);
}

const fetchData = async () => {
if (searchBar) {
    const data = await fetch(
        `https://pokemon-backend-ydlf.onrender.com/api/pokemon/search?name=${searchBar}`
      );
      const res = await data.json();
      setPokemon(res);
} else {
const endOffset = itemOffset + PokemonPerPage;
const data = await fetch(
    `https://pokemon-backend-ydlf.onrender.com/api/pokemon`);
      const res = await data.json();
      setPokemon(res.slice(itemOffset, endOffset));
      setTotalPages(Math.ceil(res.length / PokemonPerPage))
  }
};

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    fetchData();
    fetchUsername();
    return () => clearTimeout(timer);
  }, [searchBar, itemOffset, PokemonPerPage]);

const handleChange = (page) => {
    const newOffset = page.selected * PokemonPerPage;
    console.log(
        `User requested page number ${
          page.selected + 1
        }, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
let user = username.username;
console.log(username);
console.log(pokemon)
    return (
        <>
            <div
      style={{
        color: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        className="greyContainer"
        style={{
          backgroundColor: "rgba(100, 100, 100, 0.4)",
          borderRadius: "20px",
          width: "80%",
          minHeight: "100vh",
          marginBottom: "10px",
        }}
      >
        <SearchBar setSearchBar={setSearchBar} />
        <br />
        {username.length <= 0 && pokemon.length <= 0 ? <Spinner /> : (
          <>
          <PokemonTitle username={user} /> 
        {pokemon.map((p, index) => (
              <div
                style={{ display: "inline-flex", margin: "20px" }}
                key={index}
              >
                <PokemonView p={p} />
              </div>
            ))}
         </>)}
          </div>
          <div className="page">
        <ReactPaginate
        nextLabel="Next >"
        previousLabel="< Previous"
        breakLabel="..."
        onPageChange={handleChange}
        pageCount={totalPages}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}
      />
      </div>
    </div>
        </>
    )
}