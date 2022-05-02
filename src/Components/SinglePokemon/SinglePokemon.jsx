import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getIndivData } from "../../Utils/api";
import "./SinglePokemon.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import Compare from "../Compare/Compare";
import PokemonCard from "./PokemonCard";

const SinglePokemon = () => {
  const { name } = useParams();
  const [onePokemon, setOnePokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  const showComparison = () => {
    if (showCompare) {
      return setShowCompare(false);
    } else setShowCompare(true);
  };

  useEffect(() => {
    getIndivData(name).then((res) => {
      setIsLoading(false);
      setOnePokemon(res);
      setTypes(res.types);
      setStats(res.stats.slice(1));
    });
  }, [name]);

  if (isLoading) {
    return <LoadingScreen></LoadingScreen>;
  } else
    return (
      <>
        <div className="whole-page">
          <PokemonCard name={onePokemon.name} />{" "}
          {showCompare ? <Compare /> : null}
        </div>

        <div className="button-div">
          <button onClick={showComparison} className="compare-button">
            Compare Me!
          </button>
        </div>
      </>
    );
};

export default SinglePokemon;
