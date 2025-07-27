import type { Dog } from "../types";

interface RandomDogProps {
  dog: Dog;
}

const RandomDog = ({ dog }: RandomDogProps) => {
  // C: Il fallait gérer l'état du chien dans ce composant et le fetch de l'image ici
  // Remarque: Si on fait le fetch dans App, on ne peut pas utiliser le key pour différencier les chiens => KO
  //           Il faudrait faire 3 fetch dans App et passer les chiens en props à RandomDog, ce qui n'est pas optimal
  //           En le faisant ici, à chaque fois que le composant RandomDog est utilisé dans App, il va faire un fetch pour obtenir une nouvelle image de chien
  return (
    <div>
      <img src={dog.message} alt={dog.status} />
    </div>
  );
};

export default RandomDog;
