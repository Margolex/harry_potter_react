import React from "react";
import "./Grid.css";
import {Card} from '../Card/Card'



export const Grid = ({ arr, input, faculty, likesArr, addLike, removeLike }) => {
  // console.log(likesArr)

  return (
    <div className="grid">
      {arr
        .filter(
          (el) =>
            el.name.toLowerCase().trim().includes(input.toLowerCase().trim()) &&
            (faculty === "Choose one" || el.house === faculty)
        )
        .map((el) => (
          <Card
            name={el.name}
            image={el.image}
            actor={el.actor}
            gender={el.gender}
            house={el.house}
            wand={el.wand.core}
            alive={el.alive}
            likesArr={likesArr}
            addLike={addLike}
            removeLike={removeLike}
          />
        ))}
    </div>
  );
};
