import { useEffect, useState } from "react";
import "./App.css";
import type { Joke } from "../types";

function App() {
  const [joke, setJoke] = useState<Joke>();
  //C: Ok mais comme la requête est asynchrone, il faut gérer le cas où joke n'est pas encore défini
  // const [joke, setJoke] = useState<Joke | undefined>(undefined); => la Joke est vide au début et peut le rester si la requête échoue ou non-résolue

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
      // C: Solution alternative la récupération de valeurs de la réponse:
      // .then((data) => {
      //   setJoke({
      //     joke: data.joke ?? "No joke found",    => définit une valeur par défaut tant que joke est undefined
      //     category: data.category ?? "Unknown",  => définit une valeur par défaut tant que category est undefined
      //   });
      .catch((err) => {
        console.error("JokePage::error: ", err);
      });
  }, []);

  // C: On peut rajouter un return pour gérer le cas où joke est undefined ou que la requête charge (Page de chargement)
  // if (!joke) {
  //   return <p>Loading...</p>;
  // }

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
