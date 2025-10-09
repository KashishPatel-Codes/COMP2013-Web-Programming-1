import "./App.css";
import colors from "./data/data";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

export default function App() {
  return (
    <div className="App">
      <h1>Lab 3 - Color Boxes</h1>
      <ColorBoxesContainer colors={colors} />
      <p>Click any box to change its color</p>
    </div>
  );
}
