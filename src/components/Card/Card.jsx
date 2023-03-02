import React from 'react'
import { Button } from '../Button/Button';
import './Card.css'

function isLiked(name, likesArr) {
  return likesArr.includes(name);
}
export const Card = ({
  image,
  name,
  actor,
  gender,
  house,
  wand,
  alive,
  likesArr,
  addLike,
  removeLike,
}) => {
   
  return (
    <div className={"box"}>
      <div className={"wrapper"}>
        <img src={image} alt={name} className={"img"} />
        <Button
          name={name}
          likesHandler={isLiked(name, likesArr) ? removeLike : addLike}
          isLiked={isLiked(name, likesArr)}
        />
      </div>
      <div className={"box_persone"}>
        <h3>{name}</h3>
        <p> Actor: {actor}</p>
        <p>Gender: {gender}</p>
        <p>House: {house}</p>
        <p>Wand core: {wand}</p>
        <p>Alive: {alive ? "yes" : "no"}</p>
      </div>
    </div>
  );
};
