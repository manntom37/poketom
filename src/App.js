import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Favourites from "./Components/Favourites/Favourites";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";
import SinglePokemon from "./Components/SinglePokemon/SinglePokemon";
import { ThemeContext } from "./Context";
function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <BrowserRouter>
      <div
        className="App"
        style={{
          background: darkMode ? "#023020" : "aquamarine",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="pokemon/:name" element={<SinglePokemon />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
