import { useState, useEffect } from "react";
import { Progress, Space, Button } from "antd";
import { Link } from "react-router-dom"
import "../game/game.css"

export default function Game() {
const [player, setPlayer] = useState([])
const [start, setStart] = useState(true)
const [startAnimation, setStartAnimation] = useState(false);
const [gameover, setGameOver] = useState(false);
const fetchPlayer = async () => {
    const data = await fetch("https://pokemon-backend-ydlf.onrender.com/api/pokemon/fight")
    const res = await data.json();
    setPlayer(res);
}

useEffect (() => { 
    fetchPlayer()}
    , [])

    const handleStartAnimation = () => {
        setTimeout(() => {setStartAnimation(true)}, 3000);
        const timer = setTimeout(() => {
        setStartAnimation(false); setGameOver(true)}, 10000);
        return () => clearTimeout(timer);
      };
console.log(player)
    return (
        <>
        {start ? (
        <div style={{display: "flex", justifyContent: "center"}}>
            <h1 onClick={() => {
                setStart(false); 
                handleStartAnimation()}} style={{color: "white", fontSize: "10rem", textAlign: "center", cursor: "pointer"}}>Fight!</h1>
        </div>) : 
        (
        <div className="arena" style={{display: "flex", justifyContent: "space-between"}}>



            <div style={{margin: "0% 5%"}}className="playerCon">
                <h2 style={{fontSize: "6rem", padding: "0px", margin: "0px"}}>
                {player[0]?.pokemonSelected.name.english}</h2>

                <div style={{backgroundColor: "rgb(50,50,50, 0.8)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, auto)", padding: "10%", gridGap: "50px", borderRadius: "20px"}}>

                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base.HP/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>HP: {player[0]?.pokemonSelected.base.HP}</li>
                </div>

                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base.Attack/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Attack: {player[0]?.pokemonSelected.base.Attack}</li>
                </div>

                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base.Defense/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Defense: {player[0]?.pokemonSelected.base.Defense}</li>
                </div>

                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base.Speed/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Speed: {player[0]?.pokemonSelected.base.Speed}</li>
                </div>

                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base["Sp. Defense"]/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Special Defense: {player[0]?.pokemonSelected.base["Sp. Defense"]}</li>
                </div>


                <div className="grid-item">
                <Space wrap>
                <Progress 
                type="circle"
                showInfo={false}
                percent={(player[0]?.pokemonSelected.base["Sp. Attack"]/200)*100} 
                size={100} />
                </Space>
                <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Special Attack: {player[0]?.pokemonSelected.base["Sp. Attack"]}</li>
                </div>
                </div>
                <img className={`playerImage ${startAnimation ? 'animate' : ''}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player[0]?.pokemonSelected.id}.png`} alt={player[0]?.pokemonSelected.name.english} width="400px"/>
        </div>

            {gameover ? (
            <div style={{display: "flex", flexDirection: "column", height: "85vh", justifyContent: "flex-end", fontSize: "3rem"}}>
            <h2 style={{marginBottom: "0px"}}>Game Over</h2>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <Link to="/leaderboard">
            <Button type="primary">
                Leaderboard
            </Button>
            </Link>
            <Link to={`/pokemon/${player[0]?.pokemonSelected.id}`}>
            <Button type="primary">
                Play again
            </Button>
            </Link>
            </div>
            </div>) : null}

            <div style={{margin: "0% 5%"}} className="opponentCon">
                <h2 style={{fontSize: "6rem", padding: "0px", margin: "0px"}}  >{player[1]?.pokemonOpponent.name.english}</h2>

                <div style={{backgroundColor: "rgb(50,50,50, 0.8)", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, auto)", padding: "10%", gridGap: "50px", borderRadius: "20px"}}>

                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base.HP/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>HP: {player[1]?.pokemonOpponent.base.HP}</li>
                    </div>

                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base.Attack/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Attack: {player[1]?.pokemonOpponent.base.Attack}</li>
                    </div>

                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base.Defense/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Defense: {player[1]?.pokemonOpponent.base.Defense}</li>
                    </div>

                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base.Speed/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Speed: {player[1]?.pokemonOpponent.base.Speed}</li>
                    </div>

                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base["Sp. Defense"]/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Special Defense: {player[1]?.pokemonOpponent.base["Sp. Defense"]}</li>
                    </div>


                    <div className="grid-item">
                    <Space wrap>
                    <Progress 
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base["Sp. Attack"]/200)*100} 
                    size={100} />
                    </Space>
                    <li style={{color: "white", listStyle: "none", fontFamily: "Arial"}}>Special Attack: {player[1]?.pokemonOpponent.base["Sp. Attack"]}</li>
                    </div>
                    </div>


                <img className={`opponentImage ${startAnimation ? 'animate' : ''}`} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player[1]?.pokemonOpponent.id}.png`} alt={player[1]?.pokemonOpponent.name.english} width="400px"/>
        </div>
        </div>
        )}
        </>
    )
}