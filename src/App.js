import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import imageProfile from "./assets/images/profile-pic.JPG";

function App() {
  return (
    <div>
      <NavBar />
      <img src={imageProfile} />
    </div>
  );
}

export default App;
