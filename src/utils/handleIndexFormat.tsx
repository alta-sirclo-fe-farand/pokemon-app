import React from "react";

export const handleIndexFormat = (url: string) => {
  const pokedexID = url.split("").slice(30,url.length).filter((num: string) => parseInt(num) || num === "0").join("");
  const formatPokedexID = pokedexID.length == 1
    ? "00"+pokedexID
    : pokedexID.length == 2
    ? "0"+pokedexID
    : pokedexID
  return formatPokedexID;
}