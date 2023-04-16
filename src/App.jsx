import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import MoviesContainer from "./MoviesContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <MoviesContainer />
    </div>
  );
}

export default App;
