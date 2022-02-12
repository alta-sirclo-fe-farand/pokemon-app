import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from "../component/menu";
import { PokedexCard } from "../component/pokedexCard";

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
        setCurrentPage(0);
      });
  }

  const fetchNextData = (url: string) => {
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

  if(isReady) {
    return (
      <div className="bg-dark">
      <Menu />
      <div className="container d-flex justify-content-center" style={{padding: "300px"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1024px-International_Pok%C3%A9mon_logo.svg.png" width="250px" />
      </div>
      <div className="d-flex container justify-content-center flex-wrap mt-5">
          {pokemons.map((pokemon, index) => (
            <div key={index} className='m-2 p-2'>
              <PokedexCard
                id={20 * currentPage + index + 1}
                name={pokemon.name}
                image={imageURL+(20 * currentPage + index + 1)+".png"+""}
                onClick={() => navigate(`/detail/${20 * currentPage + index + 1}`)}
              />
            </div>
          ))}
        </div>
        <div className="d-flex container justify-content-end">
          <button
            className="btn btn-outline-primary m-2 p-2"
            onClick={() => fetchData(resetURL)}>Reset Search
          </button>
          <button
            className="btn btn-primary m-2 p-2"
            onClick={() => fetchNextData(url)}>Load More
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
