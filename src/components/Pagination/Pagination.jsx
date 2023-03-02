import React from 'react'
import './Pagination.css'

export const Pagination = ({ cardsPerPage, totalCards, paginate }) => {
    const pageNumbers = []
    let lastpage = Math.ceil(totalCards / cardsPerPage)
    for (let i = 1; i <= lastpage; i++){
        pageNumbers.push(i)
    }
        
    return (
      <footer>
        <button className={"extreme"} onClick={() => paginate(1)}>
          First
        </button>

        {pageNumbers.map((number) => (
          <button onClick={() => paginate(number)}>{number}</button>
        ))}

        <button
          className={"extreme"}
          onClick={() => paginate(lastpage)}
        >
          Last
        </button>
        {/* // <div className={'select'}> */}
        {/* <p>Per page</p>
          <label>
            <select name={"ggggg"} id="">
              <option value={"5"}>5</option>
              <option value={"10"}>10</option>
              <option value={"15"}>15</option>
              <option value={"20"}>20</option>
              <option value={"25"}>25</option>
            </select>
          </label>
        </div> */}
      </footer>
    );
}
