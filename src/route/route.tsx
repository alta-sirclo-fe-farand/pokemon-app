import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Begin from '../home';
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
          <Route path="list" element={<PokemonList />} />
          <Route path="detail/:id" element={<PokemonDetail />} />
          <Route path="myList" element={<MyPokemonList />} />
          <Route path="/" element={<Begin />}>
          </Route>
        </Routes>
      </UrlContext.Provider>
    </BrowserRouter>
  )
}

export default Navigation;