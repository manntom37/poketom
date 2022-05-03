import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokemon, searchPokemon } from "../../Utils/api";
import Pagination from "../Pagination/Pagination";
import "./Homepage.css";
import { FaRegHeart } from "react-icons/fa";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { ThemeContext } from "../../Context";
import { useContext } from "react";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [pokeArray, setPokeArray] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=24"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  let handleSearch = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  useEffect(() => {
    getPokemon(currentPage).then((res) => {
      // API call which gets pokemon from the current page.
      // API I have created are in Utils/api.jsx
      setIsLoading(false);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results);
    });
  }, [currentPage]);

  searchPokemon().then((res) => {
    // API call to search through all pokemon.
    setAllPokemon(res.data.results);
  });

  function goToNextPage() {
    setCurrentPage(nextPage);
  }
  function goToPrevPage() {
    setCurrentPage(prevPage);
  }

  if (isLoading) {
    return <LoadingScreen />;
  } else
    return (
      <>
        <div className="search">
          <form>
            <input
              className="searchinput"
              placeholder="Search for a pokemon..."
              onChange={handleSearch}
            ></input>
          </form>
        </div>
        <div className="homepage">
          {search === "" && (
            <ul>
              {pokemon.map((poke) => {
                return (
                  <>
                    <div className="card-and-fave">
                      <div className="pokecard">
                        <Link to={`/pokemon/${poke.name}`}>
                          <li key={poke.name}>
                            <h2 className="pokemon-name">
                              {poke.name[0].toUpperCase() + poke.name.slice(1)}
                            </h2>
                            <img
                              className="pokeimage"
                              src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
                              alt={`An image of ${poke.name}`}
                            ></img>
                          </li>
                        </Link>{" "}
                      </div>

                      <div
                        className="favourite"
                        style={{
                          color: darkMode ? "white" : "black",
                        }}
                      >
                        <FaRegHeart
                          className="heart-button"
                          onClick={() => {
                            pokeArray.push(poke.name);
                            localStorage.setItem(
                              "favourites",
                              JSON.stringify(pokeArray)
                            );
                          }}
                        />
                      </div>
                    </div>
                  </>
                );
              })}
            </ul>
          )}

          {search !== "" && (
            <ul>
              {allPokemon.map((poke) => {
                if (poke.name.toLowerCase().includes(search.toLowerCase()))
                  return (
                    <>
                      <div className="card-and-fave">
                        <div className="pokecard">
                          {" "}
                          <Link to={`/pokemon/${poke.name}`}>
                            <li>
                              <h2>
                                {poke.name[0].toUpperCase() +
                                  poke.name.slice(1)}
                              </h2>
                              <img
                                className="pokeimage"
                                src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}
                                alt={`An image of ${poke.name}`}
                              ></img>
                            </li>
                          </Link>{" "}
                        </div>

                        <div
                          className="favourite"
                          style={{
                            color: darkMode ? "white" : "black",
                          }}
                        >
                          <FaRegHeart
                            className="heart-button"
                            onClick={() => {
                              pokeArray.push(poke.name);
                              localStorage.setItem(
                                "favourites",
                                JSON.stringify(pokeArray)
                              );
                            }}
                          />
                        </div>
                      </div>
                    </>
                  );
              })}
            </ul>
          )}

          <Pagination
            goToNextPage={goToNextPage}
            goToPrevPage={goToPrevPage}
          ></Pagination>
        </div>
      </>
    );
};

export default Homepage;
