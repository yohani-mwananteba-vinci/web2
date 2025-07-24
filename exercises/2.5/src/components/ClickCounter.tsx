import { useState } from "react";

interface ClickCounterProps {
  title: string;
  messageCounter: string;
  messageButton: string;
}

const ClickCounter = ({
  title,
  messageCounter,
  messageButton,
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isOnButton, setIsOnButton] = useState(false);

  const handleCounter = () => {
    // console.log("Number of click = " + count);
    // if (count === 10) console.log("The messageCounter is update !");
    setCount((count) => count + 1);
  };

  const handleMessageEnter = () => {
    // console.log("Mouse on the button !");
    setIsOnButton(!isOnButton);
  };

  const handleMessageLeave = () => {
    // console.log("Mouse left the button !");
    setIsOnButton(!isOnButton);
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
};

export default ClickCounter;
