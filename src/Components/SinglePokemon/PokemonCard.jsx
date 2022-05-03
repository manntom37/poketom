import React from "react";
import { useState, useEffect } from "react";
import { getIndivData } from "../../Utils/api";
import "./SinglePokemon.css";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

// Reusable component for individual pokemon cards
const PokemonCard = ({ name }) => {
  const [onePokemon, setOnePokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [stats, setStats] = useState([]);

  const backgroundColour = () => {
    // Changes the background color of each pokemon depending on their type
    let color = "";
    if (types[0].type.name === "bug" || types[0].type.name === "ground") {
      color = "#9A8275";
    } else if (types[0].type.name === "water") {
      color = "#87F1FF";
    } else if (types[0].type.name === "fire") {
      color = "#FFBF69";
    } else if (types[0].type.name === "grass") {
      color = "#d3ffce";
    } else if (types[0].type.name === "normal") {
      color = "#FDF7FA";
    } else if (types[0].type.name === "fighting") {
      color = "#E86252";
    } else if (types[0].type.name === "rock") {
      color = "#918C91";
    } else if (types[0].type.name === "poison") {
      color = "#BF8EC7";
    } else if (types[0].type.name === "dragon") {
      color = "#16F4D0";
    } else if (types[0].type.name === "electric") {
      color = "#FFCD04";
    } else if (types[0].type.name === "ice") {
      color = "#DAFFEF";
    } else if (types[0].type.name === "dark") {
      color = "#636363";
    } else if (types[0].type.name === "flying") {
      color = "#85C7F2";
    } else if (types[0].type.name === "steel") {
      color = "#AEB7B3";
    } else if (types[0].type.name === "ghost") {
      color = "#E0FBFC";
    } else if (types[0].type.name === "fairy") {
      color = "#fddde6";
    }

    return color;
  };

  useEffect(() => {
    // API call to get the specific pokemon
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
        <div className="indiv-pokecard">
          <div className="title">
            <h1 className="indiv-pokename">
              {onePokemon.name[0].toUpperCase() + onePokemon.name.slice(1)}
            </h1>
            <h2 className="indiv-pokeHP">
              {onePokemon.stats[0].stat.name.toUpperCase()}{" "}
              {onePokemon.stats[0].base_stat}
            </h2>
          </div>

          <div
            className="image-div"
            style={{ "background-color": backgroundColour() }}
          >
            <img
              src={onePokemon.sprites.front_default}
              className="indiv-pic"
              alt={`An image of the pokemon ${onePokemon.name}`}
            ></img>
          </div>
          <div className="id-height-weight">
            ID: {onePokemon.id} | Height: {onePokemon.height} | Weight:{" "}
            {onePokemon.weight}
          </div>
          <div className="typesList">
            <span style={{ "font-weight": "bold" }}>Type:</span>
            {types.map((pokeTypes) => {
              return (
                <li key={pokeTypes.type.name}>
                  {pokeTypes.type.name[0].toUpperCase() +
                    pokeTypes.type.name.slice(1)}
                </li>
              );
            })}
          </div>
          <div className="stats">
            <span style={{ "font-weight": "bold" }}>Stats: </span>
            {stats.map((stat) => {
              return (
                <li key={stat.stat.name}>
                  <span className="statName">
                    {stat.stat.name[0].toUpperCase() + stat.stat.name.slice(1)}{" "}
                    :{" "}
                  </span>
                  <span className="statFigure"> {stat.base_stat}</span>
                </li>
              );
            })}
          </div>
        </div>
      </>
    );
};

export default PokemonCard;
