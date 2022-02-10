import React from "react";

export type elementCardProps = {
  name: string;
}

export type detailCardProps = {
  name: string;
  types?: string[];
  moves?: string[];
}

export type pokedexCardProps = {
  id: number;
  name: string;
  image: string;
  onClick: () => void;
}
