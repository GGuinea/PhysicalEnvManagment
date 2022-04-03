import React, { useEffect, useState } from "react";
import TodoFormSearch from "./TodoFormSearch";
import axios from "axios";
import Todo from "./Todo";
import TodoSearchDisplay from "./TodoSearchDisplay";

function TodoSearch() {
  const [serach, setSearch] = useState([]);


  const searchQuery = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

const searchReq = todo.text.toLowerCase();
const url = `http://127.0.0.1:8080/todo/search/${searchReq}`;
await axios.get(`${url}`).then((res) => {
        const data = res.data;
        const receivedTodos = [];
        data.map((object) => {
          console.log(object.id);
          receivedTodos.push({ id: object.id, text: object.description });
        });
        console.log(receivedTodos);
        setSearch(receivedTodos);
}

);
  };
    return (
<div>
    <h1>Lista wyszukan</h1>
    <TodoFormSearch onSubmit={searchQuery}></TodoFormSearch>
      <TodoSearchDisplay
        todos={serach}
      ></TodoSearchDisplay>
</div>

);
}

export default TodoSearch;
