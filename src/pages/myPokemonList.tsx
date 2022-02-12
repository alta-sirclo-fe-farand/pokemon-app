import React, { useState } from "react";
import Menu from "../component/menu";
import { MyPokemonCard } from "../component/myPokemonCard/myPokemonCard";

const MyPokemonList = () => {
  var myPokemon_deserialized = JSON.parse(localStorage.getItem('myPokemon') as string) || {};
  const [refreshToggle, setRefreshToggle] = useState(false);

  const handleDelete = (deleted: number) => {
    myPokemon_deserialized.pokemons.splice(deleted,1);
    const myPokemon_serialized = JSON.stringify(myPokemon_deserialized);
    localStorage.setItem('myPokemon', myPokemon_serialized);
    setRefreshToggle(!refreshToggle);
  }
  return (
    <div className="bg-dark">
      <div className="d-flex pb-3">
        <Menu />
      </div>
      <div className="d-flex justify-content-center m-5 p-2">
        <div className="column">
          <h3 className="text-light">My Pokemon</h3>
          {(myPokemon_deserialized.pokemons.length) === 0
          ? <div>You have no Pokemon!</div>
          : myPokemon_deserialized.pokemons.map((pokemon: any, index: number) => (
            <div key={index} className="p-1">
              <MyPokemonCard
                id={pokemon.id}
                name={pokemon.name}
                nickname={pokemon.nickname}
                image={pokemon.photo}
                onClick={() => handleDelete(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPokemonList;
