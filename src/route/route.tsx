import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from '../pokemonList';
import PokemonDetail from '../pokemonDetail';
import MyPokemonList from '../myPokemonList';
import UrlContext from '../utils/variables';

const Navigation = () => {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  return (
    <BrowserRouter>
      <UrlContext.Provider value={ url }>
        <Routes>
          <Route path="detail/:id" element={<PokemonDetail />} />
          <Route path="myList" element={<MyPokemonList />} />
          <Route path="/" element={<PokemonList />} />
          <Route />
        </Routes>
      </UrlContext.Provider>
    </BrowserRouter>
  )
}

export default Navigation;
