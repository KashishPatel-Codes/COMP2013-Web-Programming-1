import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  const totalBoxes = 25;

  // Create 25 random colors from the color list
  const randomColors = Array.from({ length: totalBoxes }, () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  });

  return (
    <div className="ColorBoxesContainer">
      {randomColors.map((color, index) => (
        <ColorBox
          key={index}
          colors={colors}
          initialColor={color}
        />
      ))}
    </div>
  );
}
