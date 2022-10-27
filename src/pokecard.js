import React from "react";
import "./pokecard.css";

const POKEMON_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const Pokecard = (props) => {
  let poke_img = `${POKEMON_API}${props.id}.png`;
  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{props.name}</div>
      <img className="Pokecard-image" src={poke_img} />
      <div className="Pokecard-type">{props.type}</div>
      <div className="Pokecard-exp">{props.base_experience}</div>
    </div>
  );
};

export default Pokecard;
