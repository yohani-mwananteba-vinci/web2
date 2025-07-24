import { useState } from "react";

interface ClickCounterProps {
  title: string;
  messageCounter: string; //C: Aurait dû être une propriété optionnelle (rappel: "messageCounter ?: string");
  messageButton: string; //C: Aurait dû être une propriété optionnelle
}

const ClickCounter = ({
  title,
  messageCounter, //C: Ok mais on pouvait lui donner une valeur par défaut pour les messages
  messageButton,
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isOnButton, setIsOnButton] = useState(false);

  // C: On aurait pû mettre les fonctions handle dans le return (on fait au plus libile)
  const handleCounter = () => {
    setCount((count) => count + 1);
  };

  const handleMessageEnter = () => {
    setIsOnButton(!isOnButton); // C: Pour les set avec des booleans, mieux vaut mettre setIsOnButton(true); => Evite la confusion
  };

  const handleMessageLeave = () => {
    setIsOnButton(!isOnButton); // C: Pour les set avec des booleans, mieux vaut mettre setIsOnButton(false); => Evite la confusion
  };

  return (
    <>
      <h2>{title}</h2>
      <button
        onClick={handleCounter}
        onMouseEnter={handleMessageEnter}
        onMouseLeave={handleMessageLeave}
      >
        count is {count}
      </button>
      <p>{isOnButton ? messageButton : undefined}</p>
      <p>{count >= 10 ? messageCounter : undefined}</p>
    </>
  );
  //Remarque: Pour les messages: on pouvait mettre les balises DANS la variable de la propriété (ex: {count >= 10 ? <p>{on10ClickMessage}</p> : null})
};

export default ClickCounter;
