import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import SinglePokemon from "./Components/SinglePokemon/SinglePokemon";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemon/:name" element={<SinglePokemon />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
