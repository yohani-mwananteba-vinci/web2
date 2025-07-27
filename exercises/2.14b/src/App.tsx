import { useEffect, useState } from "react";
import RandomDog from "./RandomDog";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRefresh(!refresh);
    }, 5000);
    return () => clearInterval(interval);
  }, [refresh]);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <RandomDog key={`${refresh}1`} />
        <RandomDog key={`${refresh}2`} />
        <RandomDog key={`${refresh}3`} />
      </div>
    </>
  );
};

export default App;
