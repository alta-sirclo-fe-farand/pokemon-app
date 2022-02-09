import React from "react";

export type pokedexCardProps = {
  name: string;
  image: string;
  onClick: () => void
}

export type detailCardProps = {
  name: string;
  types: string[];
  moves: string[];
}