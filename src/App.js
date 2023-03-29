import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./Components/HeroPage/HeroPage";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";

function App() {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const intersectingRef = useRef(null)
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <HeroPage />
                <Projects />
              </div>
            }
          />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
