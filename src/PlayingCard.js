import React, { useState } from "react";
import backOfCard from "./back.png";
import {useFlipped} from "./hook"
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, flip] = useFlipped();
  
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}


export default PlayingCard;
