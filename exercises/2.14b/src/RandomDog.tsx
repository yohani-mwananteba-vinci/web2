import { useEffect, useState } from "react";

interface Dog {
  message: string;
  status: string;
}

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);
  // C: Variable d'état pour gérer le rafraîchissement de l'image de chien à mettre ici

  const fetchDogImage = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error(
          `fetch error : ${response.status} : ${response.statusText}`
        );
      }
      const dog = await response.json();
      setDog({
        message: dog.message ?? "No dog found",
        status: dog.status ?? "Error",
      });
    } catch (error) {
      console.log("RandomDog::error :", error);
      // C: On peut faire un setDog pour montrer un message d'erreur ou une image par défaut
      //  setDog({ message: "Failed to fetch dog image", status: "Error" });
    }
  };

  useEffect(() => {
    fetchDogImage();
    // C: Il fallait mettre le setInterval ici pour que l'image se rafraîchisse
  }, []);

  // C: Solution optimale pour rafraîchir l'image de chien
  //   useEffect(() => {
  //   fetchDogImage();

  //   const intervalId = setInterval(() => {
  //     if (!isHovered) {
  //       fetchDogImage();
  //     }
  //   }, 5000);

  //   return () => clearInterval(intervalId); // Clean up the interval on unmount
  // }, [isHovered]);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Random dog</h3>
      <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
    </div>
  );
};

export default RandomDog;
