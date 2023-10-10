import { Button, Space } from "antd";
import {Link} from "react-router-dom"
import Form from "./Form"
import {useState, useEffect} from "react"

export default function Homepage() {
  const [clicked, setClicked] = useState(false)
  const [pokemon, setPokemon] = useState([])

// testing if we fetch data in Homepage, will it load faster on Pokemon page?
// as it stands, when the homepage is first openened there isn't any data for a while
const fetchData = async () => {
    const data = await fetch(
      `https://pokemon-backend-ydlf.onrender.com/api/pokemon`
    );
    const res = await data.json();
    setPokemon(res);
    }

useEffect(() => {
  fetchData();
}, [] ) 
console.log(pokemon)
  return (
    <>
      <div
        className="homeContainer"
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ color: "#FFF", letterSpacing: "20px", fontSize: "5rem" }}>
          Pokifight
        </h1>
        {!clicked ? (<Space wrap>
        <Button 
        style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontSize:"3rem", padding: "40px 50px"}}
        size= "large"
        type="primary"
        contentFontSize="50px"
        onClick={() => setClicked(true)}
        danger
        > Start</Button>
      </Space>) 
      : null}
      {clicked ? <Form/> : null}
      </div>
    </>
  );
}
