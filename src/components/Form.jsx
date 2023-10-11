import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PostUsername from "./Createpostuser";

export default function Form() {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(username);
    PostUsername(username);
    window.location.href = "/pokemon";
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        method="POST"
        action=""
        encType="multipart/form-data"
      >
        <div>
          <label style={{ color: "white" }}>Enter your username</label>
          <br />
          <input
            placeholder="username"
            style={{ fontSize: "1rem" }}
            type="text"
            name="username"
            onChange={handleUsername}
          />
          <br />

          <input type="submit" value="Submit username" />
        </div>
      </form>
    </>
  );
}
