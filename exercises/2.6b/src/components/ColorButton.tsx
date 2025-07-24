import { useState } from "react";
import type { Color } from "../types";

interface ColorButtonProps {
  colors: Color[];
}

const ColorButton = ({ colors }: ColorButtonProps) => {
  const [colorActual, setColor] = useState(colors[0]);

  // KO: Aide AI (trouver l'erreur en faisant .find)
  const handleSwitchColor = () => {
    setColor(
      (colorActual) => colors.find((c) => c.name === colorActual.nextColor)!
    );
    // Remarque: !!! Si on ne rajoute pas "!" à la fin du find, la couleur pourra être undefined => ERROR car undefinded interdit dans le set... !!!
  };

  return (
    <div>
      <button
        onClick={handleSwitchColor}
        style={{ backgroundColor: colorActual.name }}
      >
        {colorActual.name}
      </button>
      <p style={{ color: colorActual.nextColor }}>
        Next color : {colorActual.nextColor}
      </p>
    </div>
  );
};

export default ColorButton;
