import React from 'react'
import './Button.css'

export const Button = ({isLiked, likesHandler, name}) => {
  return (
    <div className={"circus"}>
          <button onClick={ ()=> likesHandler(name)} className={`${isLiked ? 'heart_like' : 'heart'}`} >❤</button>
    </div>
  );
}
