import CreatePostPokemonForBattle from "../Createpostdata";
import { Link } from "react-router-dom"
import { Button, Space } from "antd"
import { DoubleLeftOutlined } from "@ant-design/icons";

export default function Startgame({randomPoke, pokemon, imageId}) {
    const handleData = () => {
        CreatePostPokemonForBattle(pokemon, randomPoke[imageId - 1]);
      };
    return (

        <>
        <span style={{display: "flex", alignItems: "center", textDecoration: "none"}}>
           <Link to="/pokemon/game">
                <Button
                    onClick={handleData}
                    primary
                    danger
                    style={{display: "flex", 
                    justifyContent: "center", 
                    alignItems: "center",
                    padding: "40px 60px", 
                    fontSize: "2rem", 
                    textAlign: "center", 
                    textDecoration: "none"}}
                    >
                    Start Game🎮
                  </Button>
                  </Link>
                <DoubleLeftOutlined className="arrow" />
                </span>
        </>
    )
}