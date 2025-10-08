import "./App.css";
import colors from "./data/data";
import ColorBox from "./Components/ColorBox";

export default function App() {
  return (
    <div className="App">
      <h1>Lab 3 - Color Boxes</h1>
      <ColorBox colors={colors} />
      <p>Click any box to change its color</p>
    </div>
  );
}
