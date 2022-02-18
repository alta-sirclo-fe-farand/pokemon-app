import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from "../component/menu";
import { PokedexCard } from "../component/pokedexCard";
import { handleIndex } from "../utils/handleIndex";
import { handleIndexFormat } from "../utils/handleIndexFormat";

const PokemonList = () => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
  const resetURL = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20";
  const imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    fetchData(url);
  }, [])

  const fetchData = (url: string) => {
    axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results);
        setUrl(res.data.next);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
        setCurrentPage(currentPage + 1);
      });
  }

  const fetchRandom = async() => {
    setUrl(`https://pokeapi.co/api/v2/pokemon?offset=${Math.random()*800}&limit=20`);
    console.log(url);
    await axios
      .get(url)
      .then((res) => {
        setPokemons(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  }

  if(isReady) {
    return (
      <div>
      <Menu />
      <div className="container d-flex justify-content-center" style={{padding: "300px"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" width="250px" alt=""/>
      </div>
      <div className="d-flex container justify-content-center flex-wrap mt-5">
        {pokemons.map((pokemon, index) => (
          <div key={index} className='m-2 p-2'>
            <PokedexCard
              id={handleIndexFormat(pokemon.url)}
              name={pokemon.name}
              image={imageURL+handleIndex(pokemon.url)+".png"}
              onClick={() => navigate(`/detail/${handleIndex(pokemon.url)}`)}
            />
          </div>
        ))}
      </div>
        <div className="d-flex container justify-content-end mx-3">
          <button
            className="btn btn-outline-primary m-2 p-2"
            onClick={() => fetchRandom()}>I'm Feeling Lucky
          </button>
          <button
            className="btn btn-outline-primary m-2 p-2"
            onClick={() => fetchData(resetURL)}>Reset Search
          </button>
          <button
            className="btn btn-primary m-2 p-2"
            onClick={() => fetchData(url)}>Load More
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        Loading Databases..
      </div>
    )
  }
}

export default PokemonList;
