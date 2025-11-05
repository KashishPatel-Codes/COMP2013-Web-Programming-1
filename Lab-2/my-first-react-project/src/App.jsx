import "./App.css";
import Card from "./Components/Card";

import img1 from "./assets/images/1.jpg";
import img2 from "./assets/images/2.jpg";
import img3 from "./assets/images/3.jpg";
import img4 from "./assets/images/4.jpg";
import img5 from "./assets/images/5.jpg";
import img6 from "./assets/images/6.jpg";

function App() {
  return (
    <div className="app">
      <h1>Resorts Lite</h1>
      <div className="card-container">
        <Card country="Indonesia" hotel="Gili Air Hotel" rating={4.8} price="$589" image={img1} />
        <Card country="Seychelles" hotel="Hilton Resort" rating={4.2} price="$629" image={img2} />
        <Card country="Maldives" hotel="Coral Beach" rating={3.9} price="$549" image={img3} />
        <Card country="Thailand" hotel="Phuket Paradise" rating={4.5} price="$499" image={img4} />
        <Card country="Bali" hotel="Sunset Villa" rating={4.0} price="$459" image={img5} />
        <Card country="Hawaii" hotel="Ocean Breeze" rating={3.7} price="$699" image={img6} />
      </div>
    </div>
  );
}

export default App;
