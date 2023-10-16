import { useState, useEffect } from "react";
import { Progress, Space, Button } from "antd";
import { Link } from "react-router-dom";
import "../game/game.css";
import Countdown from "../../assets/countdown.wav";
import { Howl } from "howler";
import Smoke from "../../assets/smoke.png";
import Fightnoise from "../../assets/fightnoise.mp3";
import Fightvoice from "../../assets/fightvoice.wav";
import Skullicon from "../../assets/skullicon.png"

export default function Game() {
  const [player, setPlayer] = useState([]);
  const [result, setResult] = useState([]);
  const [start, setStart] = useState(true);
  const [timer, setTimer] = useState("Start");
  const [smoke, setSmoke] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);
  const [gameover, setGameOver] = useState(false);
  const [username, setUsername] = useState("");

const fetchUsername = async () => {
  const data = await fetch(
    "https://pokemon-backend-ydlf.onrender.com/api/pokemon/game/save/username"
  );
  const res = await data.json();
  setUsername(res);
}
  const user = username.username;
  const fetchPlayer = async () => {
    const data = await fetch(
      "https://pokemon-backend-ydlf.onrender.com/api/pokemon/fight"
    );
    const res = await data.json();
    setPlayer(res);
  };

  const fetchResult = async () => {
    const data = await fetch(
      "https://pokemon-backend-ydlf.onrender.com/api/pokemon/game/result"
    );
    const res = await data.json();
    setResult(res.dataStore.result);
  };

  const playCountdown = () => {
    const sound = new Howl({
      src: [Countdown],
      volume: 0.3,
    });
    sound.play();
  };

  const playFight = () => {
    const sound = new Howl({
      src: [Fightnoise],
      volume: 0.3,
    });
    sound.play();
  };

  const playFightVoice = () => {
    const sound = new Howl({
      src: [Fightvoice],
      volume: 0.3,
    });
    sound.play();
  };

  const handleTimer = () => {
    const time = setTimeout(() => {
      playCountdown();
    }, 0);
    setTimeout(() => {
      setTimer(1);
    }, 0);
    setTimeout(() => {
      setTimer(2);
    }, 1000);
    setTimeout(() => {
      setTimer(3);
    }, 2000);
    setTimeout(() => {
      setTimer("Fight!");
      playFightVoice();
    }, 3000);
    setTimeout(() => {
      setTimer("");
      setStart(false);
      handleStartAnimation();
    }, 4000);
    return () => clearTimeout(time);
  };

  useEffect(() => {
    fetchPlayer();
    fetchUsername(); 
    fetchResult();
  }, []);

  const handleStartAnimation = () => {
    setTimeout(() => {
      setStartAnimation(true);
    }, 3000);
    setTimeout(() => {
      setSmoke(true);
      playFight();
    }, 3200);
    setTimeout(() => {
      setSmoke(false);
    }, 3400);
    setTimeout(() => {
      setSmoke(true);
      playFight();
    }, 4200);
    setTimeout(() => {
      setSmoke(false);
      playFight();
    }, 4400);
    setTimeout(() => {
      setSmoke(true);
    }, 5200);
    setTimeout(() => {
      setSmoke(false);
      playFight();
    }, 5400);
    setTimeout(() => {
      setSmoke(true);
    }, 6200);
    setTimeout(() => {
      setSmoke(false);
      playFight();
    }, 6400);
    setTimeout(() => {
      setSmoke(true);
      playFight();
    }, 7200);
    setTimeout(() => {
      setSmoke(false);
    }, 7400);
    setTimeout(() => {
      setSmoke(true);
      playFight();
    }, 8200);
    setTimeout(() => {
      setSmoke(false);
      playFight();
    }, 8400);
    setTimeout(() => {
      setSmoke(true);
    }, 9200);
    setTimeout(() => {
      setSmoke(false);
      playFight();
    }, 9400);
    const time = setTimeout(() => {
      setStartAnimation(false);
      setGameOver(true);
    }, 10000);
    return () => clearTimeout(time);
  };
  
  console.log(user);
  console.log(player);
  console.log(result);
  return (
    <>
      {start ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h1
            className="startTitle"
            onClick={handleTimer}
            style={{
              color: "white",
              fontSize: "10rem",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            {timer}
          </h1>
        </div>
      ) : (
        <div
          className="arena"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <div style={{ margin: "0% 5%" }} className="playerCon">
            <h2 style={{ fontSize: "6rem", padding: "0px", margin: "0px" }}>
              {player[0]?.pokemonSelected.name.english}
            </h2>

            <div
              className="statsGrid"
              style={{
                backgroundColor: "rgb(50,50,50, 0.8)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(2, auto)",
                padding: "10%",
                gridGap: "50px",
                borderRadius: "20px",
              }}
            >
              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={(player[0]?.pokemonSelected.base.HP / 200) * 100}
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  HP: {player[0]?.pokemonSelected.base.HP}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={
                      (player[0]?.pokemonSelected.base.Attack / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Attack: {player[0]?.pokemonSelected.base.Attack}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={
                      (player[0]?.pokemonSelected.base.Defense / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Defense: {player[0]?.pokemonSelected.base.Defense}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={
                      (player[0]?.pokemonSelected.base.Speed / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Speed: {player[0]?.pokemonSelected.base.Speed}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={
                      (player[0]?.pokemonSelected.base["Sp. Defense"] / 200) *
                      100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Special Defense:{" "}
                  {player[0]?.pokemonSelected.base["Sp. Defense"]}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    percent={
                      (player[0]?.pokemonSelected.base["Sp. Attack"] / 200) *
                      100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Special Attack:{" "}
                  {player[0]?.pokemonSelected.base["Sp. Attack"]}
                </li>
              </div>
            </div>
            {gameover && result.loser === 1 ? <img className="skullImage" style={{position: "absolute", zIndex: 2, opacity: "80%", filter: "contrast(0)"}} width="300px" src={Skullicon} alt="skull"/> :null}
            <img
              className={`playerImage ${startAnimation ? "animate" : ""}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player[0]?.pokemonSelected.id}.png`}
              alt={player[0]?.pokemonSelected.name.english}
              width="400px"
            />
          </div>
          {smoke ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                height: "80%",
                justifyContent: "flex-end",
                position: "absolute",
                width: "100%",
                alignItems: "center",
                zIndex: "2",
              }}
            >
              <img className="smokeImage" src={Smoke} alt="smoke" width="800px" />
            </div>
          ) : null}
          {gameover ? (
            <div
            className="gameOverCon"
              style={{
                display: "flex",
                flexDirection: "column",
                // height: "85vh",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "3rem",
                backgroundColor: "rgb(50,50,50, 0.8)",
                borderRadius: "20px"
              }}
            >
              
            <h2 style={{ marginBottom: "0px", textAlign: "center", textDecoration: "underline"}}>
                Game Over
              </h2>
              
              {result.winner === 1 ?
              <>
              <h2 style={{ marginBottom: "0px", textAlign: "center"}}>{user} <br/> Wins!</h2>
              <h2 style={{ marginBottom: "0px", textAlign: "center" }}>Points: {result.points}</h2>
              </> 
              : <h2 style={{color: "white", textAlign: "center", textShadow: "2px 20px 35px rgb(211, 6, 6)"}}>{user}, <br/> you lose!</h2>}

              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: "3rem"}}>
                <Link to="/leaderboard">
                  <Button type="primary">Leaderboard</Button>
                </Link>
                <Link to={`/pokemon/${player[0]?.pokemonSelected.id}`}>
                  <Button type="primary">Play again</Button>
                </Link>
                <Link to={`/pokemon`}>
                  <Button type="primary">Browse Pokemon</Button>
                </Link>
              </div>
            </div>
          ) : null}

          <div style={{ margin: "0% 5%" }} className="opponentCon">
            <h2 style={{ fontSize: "6rem", padding: "0px", margin: "0px" }}>
              {player[1]?.pokemonOpponent.name.english}
            </h2>

            <div
            className="statsGrid"
              style={{
                backgroundColor: "rgb(50,50,50, 0.8)",
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "repeat(2, auto)",
                padding: "10%",
                gridGap: "50px",
                borderRadius: "20px",
              }}
            >
              <div className="grid-item">
                <Space wrap>
                  <Progress
                    className="progressCircle"
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={(player[1]?.pokemonOpponent.base.HP / 200) * 100}
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  HP: {player[1]?.pokemonOpponent.base.HP}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={
                      (player[1]?.pokemonOpponent.base.Attack / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Attack: {player[1]?.pokemonOpponent.base.Attack}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={
                      (player[1]?.pokemonOpponent.base.Defense / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Defense: {player[1]?.pokemonOpponent.base.Defense}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={
                      (player[1]?.pokemonOpponent.base.Speed / 200) * 100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Speed: {player[1]?.pokemonOpponent.base.Speed}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={
                      (player[1]?.pokemonOpponent.base["Sp. Defense"] / 200) *
                      100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Special Defense:{" "}
                  {player[1]?.pokemonOpponent.base["Sp. Defense"]}
                </li>
              </div>

              <div className="grid-item">
                <Space wrap>
                  <Progress
                    type="circle"
                    showInfo={false}
                    strokeColor="red"
                    percent={
                      (player[1]?.pokemonOpponent.base["Sp. Attack"] / 200) *
                      100
                    }
                    size={100}
                  />
                </Space>
                <li
                  style={{
                    color: "white",
                    listStyle: "none",
                    fontFamily: "Arial",
                  }}
                >
                  Special Attack:{" "}
                  {player[1]?.pokemonOpponent.base["Sp. Attack"]}
                </li>
              </div>
            </div>
            {gameover && result.winner === 1 ? <img className="skullImage" style={{position: "absolute", zIndex: 2, opacity: "80%", filter: "contrast(0)"}} width="300px" src={Skullicon} alt="skull"/> : null}
            <img
              className={`opponentImage ${startAnimation ? "animate" : ""}`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${player[1]?.pokemonOpponent.id}.png`}
              alt={player[1]?.pokemonOpponent.name.english}
              width="400px"
            />
          </div>
        </div>
      )}
    </>
  );
}
