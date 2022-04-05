import React, { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
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
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-center">
    <button class="btn btn-outline-success me-2" type="button">MK</button>
    <button class="btn btn-outline-success me-2" type="button">KASY</button>
    <button class="btn btn-outline-success me-2" type="button">WSZYSTKO</button>
  </form>
</nav>
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-center">
    <button class="btn btn-outline-success me-2" type="button">WAWA</button>
    <button class="btn btn-outline-success me-2" type="button">RYBNIK</button>
    <button class="btn btn-outline-success me-2" type="button">WSZYSTKO</button>
  </form>
</nav>
<nav class="navbar navbar-light bg-light">
  <form class="container-fluid justify-content-center">
    <button class="btn btn-outline-success me-2" type="button">WOLNE</button>
    <button class="btn btn-outline-success me-2" type="button">ZAJETE</button>
    <button class="btn btn-outline-success me-2" type="button">WSZYSTKO</button>
  </form>
</nav>
    </>
  );
}
export default ButtonPanel;
