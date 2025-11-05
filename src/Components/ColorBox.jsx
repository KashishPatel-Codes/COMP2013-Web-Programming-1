import { useState } from "react";

export default function ColorBox({ colors, initialColor }) {
  const [color, setColor] = useState(initialColor);

  function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length); //to get random color on click
    setColor(colors[randomIndex]);
  }

  return (
    <div
      className="ColorBox"
      style={{
        backgroundColor: color,
        width: "50px",
        height: "50px",
        display: "inline-block",
        margin: "2px",
        cursor: "pointer",
      }}
      onClick={changeColor}
    ></div>
  );
}
