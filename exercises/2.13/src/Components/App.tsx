import { useEffect, useState } from "react";
import "./App.css";
import type { Joke } from "../types";

function App() {
  const [joke, setJoke] = useState<Joke>();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
      .then((response) => {
        if (!response.ok)
          throw new Error(
            `fetch error : ${response.status} : ${response.statusText}`
          );
        return response.json();
      })
      .then((joke) => {
        setJoke(joke);
      })
      .catch((err) => {
        console.error("JokePage::error: ", err);
      });
  }, []);

  return (
    <>
      <h1>Joke API</h1>
      <div>
        <p>
          <i>{joke?.joke}</i>
        </p>
        <p>
          Category: <strong>{joke?.category}</strong>
        </p>
      </div>
    </>
  );
}

export default App;
