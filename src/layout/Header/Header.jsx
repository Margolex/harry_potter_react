import React from "react";
import "./Header.css";
import { InputField } from "../../components/InputField/InputField";

export const Header = ({input,handler,selectorHandler,faculty}) => {
  return (
    <header>
      <div className={"container"}>
        <h1>Harry Potter</h1>
        <h2>View all characters from the Harry Potter universe</h2>
        <InputField
          input={input}
          handler={handler}
          selectorHandler={selectorHandler}
          faculty={faculty}
        />
      </div>
    </header>
  );
};
