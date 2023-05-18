import "reset-css";

import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>dupa</div>} />
          <Route path="/home" element={<Home />} />
          {/* <Route path="/" element={<LoginForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
