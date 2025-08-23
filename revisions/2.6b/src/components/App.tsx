import type { Color } from "../types";
import "./App.css";
import ColorButton from "./ColorButton";

// C: Aurait pu être un tableau de string + à mettre dans ColorButton.tsx
const colors: Color[] = [
  { name: "red", nextColor: "green" },
  { name: "green", nextColor: "blue" },
  { name: "blue", nextColor: "yellow" },
  { name: "yellow", nextColor: "purple" },
  { name: "purple", nextColor: "red" },
];

function App() {
  return (
    <div>
      <ColorButton colors={colors} />
      <ColorButton colors={colors} />
      <ColorButton colors={colors} />
    </div>
  );
}

export default App;
