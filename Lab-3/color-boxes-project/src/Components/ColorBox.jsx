import { useState } from "react";

export default function ColorBox({ colors }) {
  const [boxColors, setBoxColors] = useState(colors);

  function changeColor(i) {
    const newColors = [...boxColors];
    const current = boxColors[i];
    const nextIndex = (colors.indexOf(current) + 1) % colors.length;
    newColors[i] = colors[nextIndex];
    setBoxColors(newColors);
  }

  return (
    <div className="main-box">
      {boxColors.map((color, i) => (
        <div
          key={i}
          className="color-box"
          style={{ backgroundColor: color }}
          onClick={() => changeColor(i)}
        ></div>
      ))}
    </div>
  );
}
