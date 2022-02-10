import React, { useEffect, useState } from "react";
import Menu from "../component/menu";

const MyPokemonList = () => {
  const myPokemon_deserialized = JSON.parse(localStorage.getItem('myPokemon') || "");
  return (
    <div>
      <div className="d-flex pb-3">
        <Menu />
      </div>
      <div className="d-flex justify-content-center m-5 p-2">
        <h3>My Pokemon</h3>
        {myPokemon_deserialized.pokemons.map((pokemon: any) => (
          <div key={pokemon.id}>
            <p>#{pokemon.id} {pokemon.nickname}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyPokemonList;
