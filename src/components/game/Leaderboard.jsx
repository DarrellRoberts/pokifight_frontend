import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function Leaderboard() {
  const [infoAll, setAllInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const URL = "https://pokemon-backend-ydlf.onrender.com/api/pokemon/game/save";
  const fetchData = async () => {
    const data = await fetch(URL);
    const res = await data.json();
    if (res) {
      setAllInfo(res);
      //   console.log(res);
    }
  };

  const getData = () => {
    if (infoAll.results) {
      infoAll.results.map((info) => {
        if (info.username) {
          console.log(info.username);
        }
      });
      console.log(infoAll);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      fetchData();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 style={{ color: "white", fontSize: "10rem", textAlign: "center" }}>
        Leaderboard
      </h1>
      <div
        className="leaderboardContainer"
        style={{
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
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            alignItems: "center",
            borderRadius: "20px",
            width: "80%",
            minHeight: "100vh",
            marginBottom: "10px",
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
            <>
              {infoAll.results &&
                infoAll.results.map((info) => (
                  <>
                    <div
                      className="firstPlace"
                      style={{
                        width: "75%",
                        margin: "2%",
                        paddingRight: "10%",
                        borderRadius: "20px",
                      }}
                    >
                      <ul
                        className="leftUl"
                        style={{
                          float: "left",
                          listStyle: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "start",
                          width: "50%",
                          padding: "0px",
                        }}
                      >
                        <li
                          style={{
                            color: "white",
                            textShadow: "2px 2px 3px rgb(6, 37, 211)",
                          }}
                        >
                          🥇{info.username}
                        </li>
                      </ul>
                      <ul
                        style={{
                          float: "right",
                          display: "inline-flex",
                          listStyle: "none",
                        }}
                      >
                        <li>
                          {" "}
                          Wins
                          <br /> {info.wins}{" "}
                        </li>
                        <li>
                          {" "}
                          Loses <br /> {info.loses}
                        </li>
                        <li>
                          {" "}
                          Points <br /> {info.points}
                        </li>
                      </ul>
                    </div>
                  </>
                ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
