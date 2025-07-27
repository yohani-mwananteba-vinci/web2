import type { Dog } from "../types";

interface RandomDogProps {
  dog: Dog;
}

const RandomDog = ({ dog }: RandomDogProps) => {
  return (
    <div>
      <img src={dog.message} alt="" />
    </div>
  );
};

export default RandomDog;
