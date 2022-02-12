import React from 'react';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  
  return (
    <ul className="mb-2">
      <li>
        <a onClick={() => navigate("/")}>PokeList</a>
      </li>
      <li>
        <a onClick={() => navigate("/myList")}>MyPokeList</a>
      </li>
    </ul>
  )
}

export default Menu;
