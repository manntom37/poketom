import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./Components/Homepage/Homepage";
import SinglePokemon from "./Components/SinglePokemon/SinglePokemon";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemon/:id" element={<SinglePokemon />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
