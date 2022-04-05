import React, { useEffect, useState } from "react";
import TodoSearchDisplay from "./TodoSearchDisplay";
import ButtonPanel from "./ButtonPanel";

function TodoSearch() {
  const [constat, setConstatnt] = useState([]);
  const [serach, setSearch] = useState([]);
  const receivedTodos = [];
  receivedTodos.push({ id: 0, type: 0, location: 0, text: "wawa-1" });
  receivedTodos.push({ id: 1, type: 0, location: 0, text: "wawa-2" });
  receivedTodos.push({ id: 2, type: 1, location: 0, text: "wawa-2-kasa-2" });
  receivedTodos.push({ id: 3, type: 1, location: 0, text: "wawa-2-kasa-1" });
  receivedTodos.push({ id: 4, type: 0, location: 1, text: "rybnik-1" });
  const filtr = { filtrType: 0 };

  useEffect(() => {
    setConstatnt(receivedTodos)
    setSearch(receivedTodos)
    console.log("Default set");
  }, []);

  const handleFilter = () => {
    setSearch("Constat:" + constat)
    console.log("handle");
    console.log(filtr);
    if(filtr.filtrType === 2) {
        setSearch(constat);
        return
    }
    const updated = constat.filter((item) => item.type === filtr.filtrType);
    console.log(updated);
    setSearch(updated);
  };

  return (
    <div>
      <ButtonPanel handleFilter={handleFilter} filtr={filtr}></ButtonPanel>
      <TodoSearchDisplay todos={serach}></TodoSearchDisplay>
    </div>
  );
}

export default TodoSearch;
