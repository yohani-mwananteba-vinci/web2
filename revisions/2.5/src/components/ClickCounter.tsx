import { useState } from "react";

interface ClickCounterProps {
  title: string;
  messageCounter: string;
  messageMouse: string;
}

const ClickCounter = ({
  title,
  messageCounter,
  messageMouse,
}: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [onMouse, setOnMouse] = useState(false);

  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => setCount((count) => count + 1)}
        onMouseEnter={() => setOnMouse(!onMouse)}
        onMouseLeave={() => setOnMouse(!onMouse)}
      >
        count is {count}
      </button>
      {onMouse ? <p>{messageMouse}</p> : undefined}
      {count >= 10 ? <p>{messageCounter}</p> : undefined}
    </div>
  );
};

export default ClickCounter;
