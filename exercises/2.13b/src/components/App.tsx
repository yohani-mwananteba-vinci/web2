import { useEffect, useState } from "react";
import "./App.css";
import type { Dog } from "../types";
import RandomDog from "./RandomDog";

function App() {
  // C:
  // - La gestion de l'état devait se faire dans le composant RandomDog (fetch && loading compris)
  // - Un seul useState suffit pour gérer l'état du chien => utilisation de key dans le composant RandomDog pour faire la différence entre les 3 chiens
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const [dog2, setDog2] = useState<Dog | undefined>(undefined);
  const [dog3, setDog3] = useState<Dog | undefined>(undefined);

  // C: 1 SEUL useState pour recharger les images à l'aide d'un bouton
  // const [refresh, setRefresh] = useState(false);

  // C: Il suffit de faire 1 useEffect par chien pour faire le fetch de l'image
  //      => On l'invoque à chaque fois que le composant RandomDog est utilisé (voir plus bas et RandomDog.tsx)
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        // if (!response.ok)
        //   throw new Error(
        //     `fetch error : ${response.status} : ${response.statusText}`
        //   );
        return response.json();
      })
      .then((dog) => setDog(dog))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((dog2) => setDog2(dog2))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((dog3) => setDog3(dog3))
      .catch((err) => {
        console.error("HomePage::error: ", err);
      });
  }, []);

  if (!dog || !dog2 || !dog3) {
    return (
      <div>
        <p>
          <i>Loading...</i>
        </p>
      </div>
    );
  }

  // C:
  // -  Il fallait créer un bouton qui quand on le clique, recharge les 3 images de chiens
  //      => return (<button onClick={() => setRefresh(!refresh)}> Refresh Dogs </button>);
  // -  Il fallait utiliser la prop key dans le composant RandomDog pour forcer le rechargement de l'image
  //      => <RandomDog key={`${refresh}1`} /> <RandomDog key={`${refresh}2`} />  <RandomDog key={`${refresh}3`} />
  return (
    <div>
      <h1>API Dog</h1>
      <div className="app-content">
        <RandomDog dog={dog} />
        <RandomDog dog={dog2} />
        <RandomDog dog={dog3} />
      </div>
    </div>
  );
}

export default App;
