import axios from "axios";

const PokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemon = () => {
  return PokeAPI.get(`/pokemon`).then((res) => {
    return res;
  });
};

export const getIndivData = (name) => {
  return PokeAPI.get(`/pokemon/${name}`).then((res) => {
    return res.data;
  });
};
