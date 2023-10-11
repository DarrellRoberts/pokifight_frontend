import { useEffect } from "react";

const PostUsername = async (username) => {
  console.log(username);
  const URL = "https://pokemon-backend-ydlf.onrender.com/api/pokemon/username";
  const fetchURL = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username: username }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      console.error("Error:", error);
    });

  useEffect(() => {
    fetchURL();
  }, []);
};

export default PostUsername;
