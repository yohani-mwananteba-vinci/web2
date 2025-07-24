import type { Color } from "../types";
import "./App.css";
import ColorButton from "./ColorButton";

function App() {
  const color1 = "red";
  const color2 = "green";
  const color3 = "blue";
  const color4 = "yellow";
  const color5 = "violet";
  const PossibleColors: Color[] = [
    {
      name: color1,
      nextColor: color2,
    },
    {
      name: color2,
      nextColor: color3,
    },
    {
      name: color3,
      nextColor: color4,
    },
    {
      name: color4,
      nextColor: color5,
    },
    {
      name: color5,
      nextColor: color1,
    },
  ];

  return (
    <>
      <ColorButton colors={PossibleColors} />
    </>
  );
}

export default App;
