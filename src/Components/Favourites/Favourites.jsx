import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Favourites = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  
  const yourFavourites = localStorage.getItem("favourites");
  const parsedFavourites = JSON.parse(yourFavourites);

  return (
    <div>
      <h1
        style={{
          color: darkMode ? "white" : "black",
        }}
      >
        Favourites
      </h1>
      <ul>
        {parsedFavourites.map((favePokemon) => {
          return (
            <li>
              <Link key={favePokemon} to={`/pokemon/${favePokemon}`}>
                <div className="pokecard">
                  <li key={favePokemon}>
                    <h2 key={favePokemon} className="pokemon-name">
                      {favePokemon[0].toUpperCase() + favePokemon.slice(1)}
                    </h2>
                    <img
                      className="pokeimage"
                      src={`https://img.pokemondb.net/artwork/large/${favePokemon}.jpg`}
                      alt={`An image of ${favePokemon}`}
                    ></img>
                  </li>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
