import "reset-css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/navigation";
import Home from "./components/Start/Dashboard";
import zdjecieHome from "./assets/Home-Hero-Image.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <HashRouter>
        <Navigation />
        <img src={zdjecieHome} alt="Moje zdjęcie" />
        <Routes>
          <Route path="/" element={<div>dupa</div>} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/us" element={<Us />} />
          <Route path="/fundation" element={<Fundation />} /> 
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
