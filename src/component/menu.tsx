import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  
  return (
    <ul>
      <li>
        <a onClick={() => navigate("/list")}>PokeList</a>
      </li>
      <li>
        <a onClick={() => navigate("/myList")}>MyPokeList</a>
      </li>
    </ul>
  )
}

export default Menu;