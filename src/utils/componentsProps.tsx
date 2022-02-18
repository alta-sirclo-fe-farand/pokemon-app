import React from "react";

export type elementCardProps = {
  name: string;
}

export type detailCardProps = {
  name: string;
  image: string;
  types?: string[];
  moves?: string[];
}

export type myPokemonCardProps = {
  id: string;
  name: string;
  nickname?: string;
  image?: string;
  onClick: () => void;
}

export type pokedexCardProps = {
  id: string;
  name: string;
  image: string;
  onClick: () => void;
}
