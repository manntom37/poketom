import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getPokemon, searchPokemon } from "../../Utils/api";
import Pagination from "../Pagination/Pagination";
import "./Homepage.css";
import { FaRegHeart } from "react-icons/fa";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
let pokeArray = [];

const Homepage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=24"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [allPokemon, setAllPokemon] = useState([]);
  const [favourite, setFavourite] = useState([]);
  const favouriteStorage = localStorage.getItem("favourites");

  let handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  useEffect(() => {
    getPokemon(currentPage).then((res) => {
      setIsLoading(false);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results);
    });
  }, [currentPage]);

  searchPokemon().then((res) => {
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
              onChange={handleSubmit}
            ></input>
          </form>
        </div>
        <div className="homepage">
          {search === "" && (
            <ul>
              {pokemon.map((pokemons) => {
                return (
                  <>
                    <div className="card-and-fave">
                      <Link
                        key={pokemons.name}
                        to={`/pokemon/${pokemons.name}`}
                      >
                        <div className="pokecard">
                          <li key={pokemons.name}>
                            <h2 key={pokemons.name} className="pokemon-name">
                              {pokemons.name[0].toUpperCase() +
                                pokemons.name.slice(1)}
                            </h2>
                            <img
                              className="pokeimage"
                              src={`https://img.pokemondb.net/artwork/large/${pokemons.name}.jpg`}
                            ></img>
                          </li>
                        </div>
                      </Link>
                      <div className="favourite">
                        <FaRegHeart
                          className="heart-button"
                          onClick={() => {
                            setFavourite(pokemons.name);
                            pokeArray.push(pokemons.name);
                            console.log(pokeArray);
                            localStorage.setItem(
                              "favourites",
                              JSON.stringify(pokeArray)
                            );
                            console.log(favouriteStorage);
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
              {allPokemon.map((pokemons) => {
                if (pokemons.name.toLowerCase().includes(search.toLowerCase()))
                  return (
                    <>
                      <div className="card-and-fave">
                        <Link
                          key={pokemons.name}
                          to={`/pokemon/${pokemons.name}`}
                        >
                          <div className="pokecard">
                            <li key={pokemons.name}>
                              <h2 key={pokemons.name}>
                                {pokemons.name[0].toUpperCase() +
                                  pokemons.name.slice(1)}
                              </h2>
                              <img
                                className="pokeimage"
                                src={`https://img.pokemondb.net/artwork/large/${pokemons.name}.jpg`}
                              ></img>
                            </li>
                          </div>
                        </Link>{" "}
                        <div className="favourite">
                          <FaRegHeart
                            className="heart-button"
                            onClick={() => {
                              setFavourite(pokemons.name);
                              pokeArray.push(pokemons.name);
                              console.log(pokeArray);
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
