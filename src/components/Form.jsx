import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Input, Space } from "antd";

import PostUsername from "./Createpostuser";

export default function Form() {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const { Search } = Input;
  const onSearch = (e) => {
    // e.preventDefault();
    console.log(username);
    PostUsername(username);
    window.location.href = "/pokemon";
  };

  return (
    <>
      <form
        // onSubmit={handleFormSubmit}
        method="POST"
        action=""
        encType="multipart/form-data"
      >
        <div>
          <label style={{ color: "white", fontFamily: "Arial", textShadow: "1px 2px 20px rgb(6, 37, 211)", fontSize: "2rem", backgroundColor: "grey" }}>Enter your username</label>
          <br />
          <Space direction="vertical">
      <Search
      onSearch={onSearch}
      placeholder="Enter your username"
      allowClear
      value={username}
      enterButton="Search"
      size="large"
      onChange={handleUsername}
    />
      </Space>
          {/* <input
            placeholder="username"
            style={{ fontSize: "1rem" }}
            type="text"
            name="username"
            onChange={handleUsername}
          />
          <br />

          <input type="submit" value="Submit username" /> */}
        </div>
      </form>
    </>
  );
}
