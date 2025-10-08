import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  const totalBoxes = 25;

  return (
    <div className="box-container">
      {Array.from({ length: totalBoxes }).map((_, index) => (
        <ColorBox
          key={index}
          initialColor={colors[index % colors.length]}
        />
      ))}
    </div>
  );
}
