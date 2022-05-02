import React from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
  const yourFaves = localStorage.getItem("favourites");
  console.log(yourFaves);
  const parsed = JSON.parse(yourFaves);
  console.log(parsed);

  return (
    <div>
      <ul>
        {parsed.map((fave) => {
          return (
            <li>
              {" "}
              <Link key={fave} to={`/pokemon/${fave}`}>
                <div className="pokecard">
                  <li key={fave}>
                    <h2 key={fave} className="pokemon-name">
                      {fave[0].toUpperCase() + fave.slice(1)}
                    </h2>
                    <img
                      className="pokeimage"
                      src={`https://img.pokemondb.net/artwork/large/${fave}.jpg`}
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
