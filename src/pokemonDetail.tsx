import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from "./component/menu";
import UrlContext from './utils/variables';
import './style.css';

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [isReady, setIsReady] = useState(false);
  const detail = useParams();
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [moves, setMoves] = useState<string[]>([]);
  const [isSuccessful, setIsSuccessful] = useState("not yet");
  const url = useContext(UrlContext);
  const [myPokemon, setMyPokemon] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get(url+detail.id+"")
      .then((res) => {
        setId(res.data.id);
        setName(res.data.name);
        setPhoto(res.data.sprites.other.dream_world.front_default);
        setType([res.data.types[0].type.name, res.data.types[1].type.name]);
        setMoves([res.data.moves[0].move.name, res.data.moves[1].move.name, res.data.moves[2].move.name, res.data.moves[3].move.name]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsReady(true);
      });
  }

  const probability = () => {
    const random = Math.random();
    if(random < 0.5) {
      navigate("/");
    } else {
      navigate("/myList");
      setMyPokemon(myPokemon+`_${name}`+"");
      localStorage.setItem('pokemon', myPokemon);
    }
  }

  return (
    <div>
      <div className="centered">
        <h4>#{id}</h4>
        <img className="sizing" src={photo}></img>
        <h1>{name}</h1>
        <h4>{type[0]} &nbsp; {type[1]}</h4>
        <h4>{moves[0]}, {moves[1]}, {moves[2]}, {moves[3]}</h4>
      </div>
      <div className="left">
        <div>Catch this pokemon?</div>
        <button
          onClick={() => probability()}>Yes, use my Pokeball
        </button>
        <button
          onClick={() => navigate("/")}>No, go back to list
        </button>
      </div>
      <Menu />
    </div>
  )
}

export default PokemonDetail;