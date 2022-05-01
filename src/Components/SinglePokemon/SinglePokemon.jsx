import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getIndivData } from "../../Utils/api";
import Navbar from "../Navbar/Navbar";
import loading from "../../images/loading.gif";
import "./SinglePokemon.css";

const SinglePokemon = () => {
  const { name } = useParams();
  const [onePokemon, setOnePokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    getIndivData(name).then((res) => {
      setIsLoading(false);
      setOnePokemon(res);
      console.log(res);
      setTypes(res.types);
    });
  }, [name]);
  // console.log(onePokemon);
  if (isLoading) {
    return (
      <>
        <Navbar></Navbar>
        <div className="loadingscreen">
          <img src={loading}></img>
        </div>
      </>
    );
  } else
    return (
      <>
        <Navbar />
        <div className="indiv-pokecard">
          <h1>{onePokemon.name[0].toUpperCase() + onePokemon.name.slice(1)}</h1>
          <div className="image-div"><img src={onePokemon.sprites.front_default} className="indiv-pic"></img></div>
          
          {types.map((pokeTypes) => {
            return <li key={pokeTypes.type.name}>{pokeTypes.type.name}</li>;
          })}
        </div>
      </>
    );
};

export default SinglePokemon;
