import React, { useState, useEffect, useRef } from "react";

function ButtonPanel(props) {
  const [input, setInput] = useState("");


  const handleFilterMK = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(props);
    props.filtr.filtrType = 0;
    props.handleFilter();
  };

  const handleFilterKasa = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(props);
    props.filtr.filtrType = 1;
    props.handleFilter();
  };

  const handleFilterAll = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(props);
    props.filtr.filtrType = 2;
    props.handleFilter();
  };

  return (
    <>
      <div>
        <button className="todo-button" onClick={handleFilterMK}>
          MK
        </button>
        <button className="todo-button" onClick={handleFilterKasa}>
          Kasa
        </button>
        <button className="todo-button"onClick={handleFilterAll}>Wszstkie</button>
      </div>
      <div>
        <button className="todo-button">Wawa</button>
        <button className="todo-button">Rybnik</button>
        <button className="todo-button">Wszstkie</button>
      </div>
      <div>
        <button className="todo-button">Wolne</button>
        <button className="todo-button">Zajete</button>
        <button className="todo-button">Wszstkie</button>
      </div>
    </>
  );
}
export default ButtonPanel;
