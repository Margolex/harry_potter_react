
import React, { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from './components/Pages/Main/Main'
import { Favourites } from './components/Pages/Favourites/Favourites'
// import { Cards } from "./components/Pagination/Cards";


let savedLikeArr = JSON.parse(localStorage.getItem("arrHP")) ?? [];

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setData(data));
    console.log(data)
  }, []);


  const [value, setValue] = useState("");

  const textValue = (event) => {
    return setValue(event.target.value);
    
  };
  
  const [faculty, setFaculty] = useState("Choose one");

  const facultyValue = (event) => {
    return setFaculty(event.target.value);
  };

  const [likesArr, setLikes] = useState(savedLikeArr);


  function addLike(name) {
    if (!likesArr.includes(name)) {
      const newArr = [...likesArr, name];
      setLikes(newArr)
      localStorage.setItem("arrHP", JSON.stringify(newArr));
    }
  }

  function removeLike(name) {
    if (likesArr.includes(name)) {
      const newArr = likesArr.filter((el) => el !== name);
      setLikes(newArr);
      localStorage.setItem("arrHP", JSON.stringify(newArr));
    }
  }

  const dataLike = data.filter((el) => likesArr.includes(el.name));
  
  
  //сет для текущей страницы
  const [currentPage, setCurrentPage] = useState(1)
  //количество элементов для каждой страницы
  const [cardsPerPage] = useState(25)

  
  const lastCardsIndex = currentPage * cardsPerPage; //индекс первой страницы
  const firstCardsIndex = lastCardsIndex - cardsPerPage; //индекс посл страницы
  const currentCards = data.slice(firstCardsIndex, lastCardsIndex); //текущая страница

  function paginate(pageNumber) {
    setCurrentPage(pageNumber)
  } 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                textValue={textValue}
                value={value}
                facultyValue={facultyValue}
                faculty={faculty}
                likesArr={likesArr}
                addLike={addLike}
                removeLike={removeLike}
                data={currentCards}
                cardsPerPage={cardsPerPage}
                totalCards={data.length}
                paginate={paginate}
              />
            }
          />
          {/* <Cards cards={cards}/> */}
          <Route
            path="favourites"
            element={
              <Favourites
                likesArr={likesArr}
                addLike={addLike}
                removeLike={removeLike}
                dataLike={dataLike}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
