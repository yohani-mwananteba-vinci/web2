import { useState } from "react";
import type { Color } from "../types";

// C: Les données sur les couleurs devaient être ici
//  => const colors = ["red", "green", "blue", "yellow", "purple"];

// C: Inutile vu que le type Color n'était pas nécessaire
interface ColorButtonProps {
  colors: Color[];
}

const ColorButton = ({ colors }: ColorButtonProps) => {
  // C: OK mais on aurait pu faire ça avec l'index du tableau (Voir ci-dessous la solution alternative)
  const [colorActual, setColor] = useState(colors[0]);

  // KO: Aide AI (trouver l'erreur en faisant .find)
  const handleSwitchColor = () => {
    setColor(
      (colorActual) => colors.find((c) => c.name === colorActual.nextColor)!
    );
    // Remarque: !!! Si on ne rajoute pas "!" à la fin du find, la couleur pourra être undefined => ERROR car undefinded interdit dans le set... !!!
  };

  return (
    <button
      onClick={handleSwitchColor}
      style={{ backgroundColor: colorActual.name }}
    >
      {colorActual.nextColor}
    </button>
  );
};

// C: Solution alternative avec l'index du tableau
/*
const colors = ["red", "green", "blue", "yellow", "purple"];

const ColorBox = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  return (
    <div
      className="color-box"
      style={{ backgroundColor: colors[currentColorIndex] }}
    >
      <button className="color-box__button"
        onClick={() => {
          setCurrentColorIndex((currentColorIndex + 1) % colors.length);
        }}
      >
        {colors[(currentColorIndex + 1) % colors.length]}
      </button>
      <h3>{colors[currentColorIndex]}</h3>
    </div>
  );
};
*/

export default ColorButton;
