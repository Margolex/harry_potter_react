import React from 'react'
import './InputField.css'

export const InputField = ({handler,input, selectorHandler, faculty}) => {
  return (
    <div className={"header__box"}>
      <div className={"header_name"}>
        <label className={"header__text"} htmlFor="Name">
          Name
        </label>
        <input
          id="Name"
          type="text"
          className={"search"}
          placeholder="Seach name"
          input={input}
          onChange={(event) => handler(event)}
        />
      </div>
      <div className={"header_school"}>
        <label className={"header__text"} htmlFor="School">
          School
        </label>
        <select
          name={"Choose one"}
          id="School"
          onChange={(event)=> selectorHandler(event)}
          faculty={faculty}
        >
          <option className={"choose"}>Choose one</option>
          <option className={"faculty"}>Gryffindor</option>
          <option className={"faculty"}>Slytherin</option>
          <option className={"faculty"}>Ravenclaw</option>
          <option className={"faculty"}>Hufflepuff</option>
        </select>
      </div>
    </div>
  );
}
