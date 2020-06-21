import React from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import "./Fav.css";

export default function Fav({ id }) {
  const { isLogged, addFav, favs } = useUser();
  const [, navigate] = useLocation();

  const isFaved = favs.some(favId => favId === id)

  const handleClick = () => {
    if (!isLogged) return navigate("/login");
    addFav({id});
  };

  const [
    label,
    emoji
  ] = isFaved
    ? [
      'Remove Gif from favorites',
      '❌'
    ] : [
      'Add Gif to favorites',
      '❤️'
    ]

  return (
    <button className="gf-Fav" onClick={handleClick}>
      <span aria-label={label} role="img">
        {emoji}
      </span>
    </button>
  );
}
