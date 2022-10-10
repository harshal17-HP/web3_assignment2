import "./App.css";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Games from "./Pages/Games";
import Home from "./Pages/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route index element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="games" element={<Games />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<div>404 Not found</div>} />
    </Routes>
  );
}

export default App;
