import React, { useState, useEffect } from "react";
import   './joke.css'
const JokeContainer = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    getJoke();
  }, []);

  const getJoke = () => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"
    )
      .then((data) => data.json())
      .then((item) => {
        setJoke(item.joke);
      });
  };

  return (
    <>
    <h1>Joke Live</h1>
      <div className="wrapper">
        <span>&#128514;</span>
        <p id="joke">{joke}</p>
        <button id="btn" onClick={getJoke}>
          Get Random Joke
        </button>
      </div>
    </>
  );
};

export default JokeContainer;
