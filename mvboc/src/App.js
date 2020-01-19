import React, { useState, useEffect } from "react";

import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex-column;
  font-family: sans-serif;
  text-align: center;
  background-color: blanchedalmond;
  min-height: 100vh;
  margin: 0px;
  padding: 50px;

  button {
    padding: 10px;
    border-radius: 8px;
    background-color: pink;
    width: 100px;
    font-size: 14px;
    outline: none;
  }
`;

export default function App() {
  const [joke, setJoke] = useState("");
  //const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(1);

  function fetchJoke() {
    const res = fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: {
        Accept: "application/json"
      }
    });
    return res;
  }

  useEffect(() => {
    const res = fetchJoke();

    res.then(result => result.json()).then(json => setJoke(json.joke));
  }, [count]);

  return (
    <StyledDiv>
      <h1>Dad Jokes Generator</h1>
      <p>
        {" "}
        {count}-{joke}{" "}
      </p>
      <button type="button" onClick={() => setCount(count => count + 1)}>
        Get Joke
      </button>
    </StyledDiv>
  );
}
