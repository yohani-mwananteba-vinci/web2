import { useState } from "react";
import type { Color } from "../types";

// C: Pas nécéssaire + un tableau de string suffisait
interface ColorButtonProps {
  colors: Color[];
}

// C: OK mais gestion + simple avec un tableau de string + utilisation de l'index pour gérer la couleur courante
const ColorButton = ({ colors }: ColorButtonProps) => {
  const [color, setColor] = useState(colors[0]);    // C: useState(0) + pratique pour gérer l'index de la couleur courante

  const handleClick = () => {
    let iNextColor = colors.indexOf(color) + 1;
    if (iNextColor >= colors.length) iNextColor = 0;
    setColor(colors[iNextColor]);
    // C: plus rapide avec modulo
    // setColor((color + 1) % colors.length) (color étant l'index de la couleur courante)
  };

  return (
    <button onClick={handleClick} style={{ backgroundColor: color.name }}>
      {color.nextColor}
    </button>
  );
};

export default ColorButton;
