import { Button, Space } from "antd";
import {NavLink} from "react-router-dom"

export default function Homepage() {
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
        <NavLink
        to="pokemon"
      >
        <Space wrap>
        <Button 
        style={{marginTop: "20px", display: "flex", justifyContent: "center", alignItems: "center", fontSize:"4rem", padding: "50px 60px"}}
        size= "large"
        type="primary"
        contentFontSize="50px" 
        danger
        > Start</Button>
      </Space>
      </NavLink>
      </div>
    </>
  );
}
