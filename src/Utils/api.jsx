import axios from "axios";

const PokeAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemon = (url) => {
  return axios.get(url).then((res) => {
    return res;
  });
};

export const getIndivData = (name) => {
  return PokeAPI.get(`/pokemon/${name}`).then((res) => {
    return res.data;
  });
};

export const searchPokemon = () => {
  return PokeAPI.get(`/pokemon?limit=1000`).then((res) => {
    return res;
  });
};
