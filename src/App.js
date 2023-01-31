import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroPage from "./Components/HeroPage/HeroPage";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<HeroPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
