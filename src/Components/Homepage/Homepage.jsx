import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getIndivData, getPokemon } from "../../Utils/api";
import Navbar from "../Navbar/Navbar";
import Pagination from "../Pagination/Pagination";
import "./Homepage.css";
import loading from "../../images/loading.gif";

const Homepage = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  useEffect(() => {
    getPokemon().then((res) => {
      setIsLoading(false);
      setNextPage(res.data.next);
      setPrevPage(res.data.previous);
      setPokemon(res.data.results);
    });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage(nextPage);
  }
  function goToPrevPage() {
    setCurrentPage(prevPage);
  }
  return (
    <>
      <Navbar />
      <div className="search">
        <form className="searchform">
          <input
            className="searchinput"
            placeholder="Search for a pokemon..."
            onChange={handleSubmit}
          ></input>
        </form>
      </div>
      <div className="homepage">
        <ul>
          {pokemon.map((pokemons) => {
            if (pokemons.name.toLowerCase().includes(search.toLowerCase()))
              return (
                <Link key={pokemons.name} to={`/pokemon/${pokemons.name}`}>
                  <div className="pokecard">
                    <li key={pokemons.name}>
                      <h2 key={pokemons.name}>
                        {pokemons.name[0].toUpperCase() +
                          pokemons.name.slice(1)}
                      </h2>
                    </li>
                  </div>
                </Link>
              );
          })}
        </ul>
        <Pagination
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
        ></Pagination>
      </div>
      <img src={loading}></img>
    </>
  );
};

export default Homepage;
