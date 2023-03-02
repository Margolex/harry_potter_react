import React from "react";
import { Link } from "react-router-dom";
import { Card } from "../../Card/Card";
import "./Favourites.css";



export const Favourites = ({ dataLike, likesArr, addLike, removeLike }) => {
  return (
    <>
      <div className={"header_like"}>
        <div className={"container"}>
          <Link to="/">
            <p className={"favourite_text"}>← Back To All</p>
          </Link>

          <h1>Likes one</h1>
          <h2>Your favorite characters from the Harry Potter universe.</h2>
        </div>
      </div>
      <div className="grid">
        {dataLike.map((elem) => (
          <Card {...elem} wand={elem.wand.core} likesArr={likesArr} addLike={addLike} removeLike={removeLike} />
        ))}
        
      </div>
    </>
  );
};


