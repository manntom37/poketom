import React from "react";
import { useState, useEffect } from "react";
import "./Compare.css";
import { getIndivData, getPokemon, searchPokemon } from "../../Utils/api";

const Compare = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [comparisonPoke, setComparisonPoke] = useState("");
  const [compariStats, setCompariStats] = useState({});
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);

  let handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  searchPokemon().then((res) => {
    setAllPokemon(res.data.results);
  });

  useEffect(() => {
    getIndivData(comparisonPoke).then((res) => {
      setCompariStats(res);
      setTypes(res.types);
      setStats(res.stats.slice(1));
    });
  }, [comparisonPoke]);

  return (
    <>
      <div className="indiv-pokecard-compare">
        <div className="search-compare">
          <form className="search-form">
            <input
              className="searchinput-compare"
              placeholder="Search for a pokemon..."
              onChange={handleSubmit}
            ></input>
          </form>
        </div>
        <ul className="comparison-ul">
          {allPokemon.map((pokemons) => {
            if (pokemons.name.toLowerCase().includes(search.toLowerCase()))
              return (
                <div className="comparison-search-list">
                  {search === "" && null}
                  {search !== "" && (
                    <li key={pokemons.name} className="comparison-search-list">
                      <h2
                        key={pokemons.name}
                        className="comparison-pokename"
                        onClick={() => setComparisonPoke(pokemons.name)}
                      >
                        {pokemons.name[0].toUpperCase() +
                          pokemons.name.slice(1)}
                      </h2>
                    </li>
                  )}
                </div>
              );
          })}
        </ul>
      </div>
      {comparisonPoke === "" && null}
      {comparisonPoke !== "" && (
        <div className="whole-page">
          <div className="indiv-pokecard">
            <div className="title">
              <h1 className="indiv-pokename">
                {compariStats.name}
                {console.log(compariStats)}
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Compare;
