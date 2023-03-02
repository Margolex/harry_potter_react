import React from 'react'
import { Header } from './Header/Header'

export const Layout = ({ input, handler, children, selectorHandler, faculty }) => {
  return (
    <>
      <Header
        input={input}
        handler={handler}
        selectorHandler={selectorHandler}
        faculty={faculty}
      />
      <main>{children}</main>
    </>
  );
};
