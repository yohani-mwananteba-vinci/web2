import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";

import ClickCounter from "./ClickCounter";

function App() {
  const titleCounter = "Click counter";
  const messageCounter = "You are a master in the art of clicking !";
  const messageButton = "Please click on me now !";

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <ClickCounter
          title={titleCounter}
          messageCounter={messageCounter}
          messageButton={messageButton}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
