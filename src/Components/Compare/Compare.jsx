import React from "react";
import { useState, useEffect } from "react";
import "./Compare.css";
import { getIndivData, searchPokemon } from "../../Utils/api";
import PokemonCard from "../SinglePokemon/PokemonCard";

const Compare = () => {
    
  const [allPokemon, setAllPokemon] = useState([]);
  const [search, setSearch] = useState("");
  const [comparisonPokemon, setComparisonPokemon] = useState("");
  const [compariStats, setCompariStats] = useState({});
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);

  let handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      setSearch(event.target.value);
    }, 500);
  };

  useEffect(() => {
    searchPokemon().then((res) => {
      setAllPokemon(res.data.results);
    });
  }, []);

  const setComparison = (name) => {
    getIndivData(name).then((res) => {
      setCompariStats(res);
      setTypes(res.types);
      setStats(res.stats.slice(1));
      setComparisonPokemon(name);
    });
  };

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
                        onClick={() => setComparison(pokemons.name)}
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
      {comparisonPokemon === "" && null}
      {comparisonPokemon !== "" && <PokemonCard name={comparisonPokemon} />}
    </>
  );
};

export default Compare;
