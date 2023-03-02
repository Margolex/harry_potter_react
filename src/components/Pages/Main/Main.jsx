import React from "react";
// import { data } from "../../../Data";
import { Link } from "react-router-dom";
import "./Main.css";
import { Layout } from "../../../layout/Layout";
import { Grid } from "../../Grid/Grid";
import { Pagination } from "../../Pagination/Pagination";

export const Main = ({
  textValue,
  value,
  facultyValue,
  faculty,
  likesArr,
  addLike,
  removeLike,
  data,
  cardsPerPage,
  totalCards,
  paginate
}) => {
  return (
    <>
      <Layout
        handler={textValue}
        input={value}
        selectorHandler={facultyValue}
        faculty={faculty}
      >
        <Grid
          arr={data}
          input={value}
          faculty={faculty}
          likesArr={likesArr}
          addLike={addLike}
          removeLike={removeLike}
        />
      </Layout>
      <Link to="/favourites">
        <button className={"button_main"}>
          <p className={"heart_main"}>❤</p>
          <span>Show Liked</span>
        </button>
      </Link>
      <Pagination cardsPerPage={cardsPerPage} totalCards={totalCards} paginate={paginate} />
    </>
  );
};
