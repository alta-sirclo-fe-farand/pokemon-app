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
  const [id, setId] = useState();
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<string[]>([]);
  const [moves, setMoves] = useState<string[]>([]);
  const url = useContext(UrlContext);
  var myPokemon_deserialized: any;
  (localStorage.getItem('myPokemon') == null)
    ? myPokemon_deserialized = new Object()
    : myPokemon_deserialized = JSON.parse(localStorage.getItem('myPokemon') || "");

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
        setType(
          (res.data.types)
          ? res.data.types.map((type: any) => type.type.name)
          : ["unknown"]
        );
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
      myPokemon_deserialized.pokemons.push({"id": `${id}`, "photo": `${photo}`, "name": `${name}`, "nickname": "myNickname"})
      localStorage.setItem('myPokemon', JSON.stringify(myPokemon_deserialized));
    }
  }
  
  if(isLoading) {
    return <p>Loading</p>
  } else {
    return (
      <div>
        <div className="d-flex pb-3">
          <Menu />
        </div>
        <div className="d-flex justify-content-center align-items-center m-5 p-2">
          <button 
            className="btn btn-outline-light m-3">{"<"}</button>
          <DetailCard
            name={name}
            image={photo}
            types={type}
            moves={[moves[0], moves[1], moves[2], moves[3]]}
          />
          <button
            className="btn btn-outline-light m-3">{">"}</button>
        </div>
        <div className="d-block justify-content-center text-center text-light">
          <h4>Catch this pokemon?</h4>
          <div>
            <button
              className="btn btn-success mx-3"
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
