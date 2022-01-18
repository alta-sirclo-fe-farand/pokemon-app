import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Menu from "./component/menu";
// import UrlContext from './utils/variables';

const PokemonList = () => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [url, setUrl] = useState<string>("https://pokeapi.co/api/v2/pokemon?limit=20");
  // const url = useContext(UrlContext);

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
      });
  }

  if(isReady) {
    return (
      <div className="centered">
        <h1>Pokemon List</h1>
        {pokemons.map((val, id) => (
          <React.Fragment key={id}>
            <p
              onClick={() => navigate(`/detail/${val.name}`)}>{val.name}
            </p>
          </React.Fragment>
        ))}
        <button
          onClick={() => fetchData(url)}>Load More
        </button>
        <Menu />
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
