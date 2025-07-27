import { useEffect, useState } from "react";

interface Joke {
  joke: string;
  category: string;
}

const App = () => {
  const [joke, setJoke] = useState<Joke | undefined>(undefined);

  // C: OK mais pas optimale => On peut faire de notre useEffect une fonction à invoquer à intervalle regulier (voir ci-dessous)
  useEffect(() => {
    // Définit un intervalle qui change de blague (fetch) toutes les 10000 ms (10 sec)
    const interval = setInterval(() => {
      fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setJoke({
            joke: data.joke ?? "No joke found",
            category: data.category ?? "Unknown",
          });
        });
    }, 10000);
    // Nettoyage de l'intervalle pour éviter des fuites de mémoire si le composant est démonté
    return () => clearInterval(interval);
  }, []);

  // C: Solution alternative:
  // 1) On transforme le useEffect en fonction fetchJoke
  //   const fetchJoke = () => {
  //   fetch("https://v2.jokeapi.dev/joke/Any?type=single")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setJoke({
  //         joke: data.joke ?? "No joke found",
  //         category: data.category ?? "Unknown",
  //       });
  //     });
  // };
  
  // 2) On appelle fetchJoke dans le useEffect et on le rappelle toutes les 10 secondes
  // useEffect(() => {
  //   fetchJoke();
  //   setInterval(fetchJoke, 10000);
  // }, []);

  if (!joke) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Random joke</h3>
      <h4>{joke.category}</h4>
      <blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>{joke.joke}</p>
      </blockquote>
      <p>
        <cite>https://v2.jokeapi.dev/joke.category</cite>
      </p>
    </div>
  );
};

export default App;
