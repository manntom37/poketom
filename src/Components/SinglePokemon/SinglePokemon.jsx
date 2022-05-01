import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getIndivData } from "../../Utils/api";
import Navbar from "../Navbar /Navbar";

const SinglePokemon = () => {
  const { name } = useParams();
  const [onePokemon, setOnePokemon] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getIndivData(name).then((res) => {
      setIsLoading(false);
      setOnePokemon(res);
      console.log(onePokemon)
    });
  }, [name]);
  console.log(onePokemon);

  return (
    <>
      <div>
        <Navbar />
        <li key={onePokemon.name}>
          <h1>{onePokemon.name}</h1>
        </li>
      </div>
    </>
  );
};

export default SinglePokemon;
