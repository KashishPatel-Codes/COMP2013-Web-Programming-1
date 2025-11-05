import "./App.css";
<<<<<<< HEAD
import FakeApiApp from "./Components/FakeApiApp";

function App() {
  return (
    <>
      <FakeApiApp />
    </>
  );
}

export default App;
=======
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
>>>>>>> 4aff2732a84fa99d223bf1dbaf8c2481edd7e56a
