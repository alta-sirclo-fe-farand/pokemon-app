import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Menu from "../component/menu";
import UrlContext from '../utils/variables';
import './style.css';
import { DetailCard } from "../component/detailCard";

const PokemonDetail = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const detail = useParams();
  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [moves, setMoves] = useState<string[]>([]);
  const url = useContext(UrlContext);

  // (localStorage.getItem('myPokemon') == null)
  //   ? var myPokemon_deserialized = new Object();
  //   : var myPokemon_deserialized = JSON.parse(localStorage.getItem('myPokemon'));

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
        console.log(res.data.types);
        setType(
          (res.data.types)
          ? res.data.types.map((type: any) => (type.type.name))
          : ["unknown"]
        );
        // [res.data.types[0].type.name, res.data.types[1].type.name]
        setMoves([res.data.moves[0].move.name, res.data.moves[1].move.name, res.data.moves[2].move.name, res.data.moves[3].move.name]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const probability = () => {
    const random = Math.random();
    if(random < 0.5) {
      navigate("/");
    } else {
      navigate("/myList");
      // myPokemon_deserialized.pokemons.push({"id": `${id}`, "nickname": "myNickname"})
      // localStorage.setItem('myPokemon', JSON.stringify(myPokemon_deserialized));
    }
  }
  
  if(isLoading) {
    return <p>Loading</p>
  } else {
    console.log(type);
    return (
      <div>
        <div className="d-flex pb-3">
          <Menu />
        </div>
        <div className="d-flex justify-content-center m-5 p-2">
          <img className="sizing" src={photo} alt=""/>
          <DetailCard
            name={name}
            types={type}
            moves={[moves[0], moves[1], moves[2], moves[3]]}
          />
        </div>
        <div className="d-block justify-content-center text-center">
          <h4>Catch this pokemon?</h4>
          <div>
            <button
              className="btn btn-outline-success mx-3"
              onClick={() => probability()}>Yes, use my Pokeball
            </button>
            <button
              className="btn btn-outline-danger mx-3"
              onClick={() => navigate("/")}>No, go back to list
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default PokemonDetail;
