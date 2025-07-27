import { useEffect, useState } from "react";
import "./App.css";
import type { Dog } from "../types";
import RandomDog from "./RandomDog";

function App() {
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  const [dog2, setDog2] = useState<Dog | undefined>(undefined);
  const [dog3, setDog3] = useState<Dog | undefined>(undefined);

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
