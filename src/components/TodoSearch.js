import React, { useEffect, useState } from "react";
import TodoSearchDisplay from "./TodoSearchDisplay";
import ButtonPanel from "./ButtonPanel";

function TodoSearch() {
  const [constat, setConstatnt] = useState([]);
  const [serach, setSearch] = useState([]);
  const receivedTodos = [];
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [authority, setAuthority] = useState("");
  receivedTodos.push({
    id: 0,
    type: 0,
    location: 0,
    text: "wawa-1",
    destination: "inpost",
    ip: "192.168.0.1",
    isReservred: true,
    reservedTo: "Kamil Zielinski",
    reservedTill: "2022-04-08T10:30:10",
  });
  receivedTodos.push({
    id: 1,
    type: 0,
    location: 0,
    text: "wawa-2",
    destination: "inpost",
    ip: "192.168.0.1",
    reservedTill: "2022-04-08T23:30:10",
  });
  receivedTodos.push({
    id: 2,
    type: 1,
    location: 0,
    text: "wawa-2-kasa-2",
    destination: "inpost",
    ip: "192.168.0.1",
    reservedTill: "2022-04-08T23:30:10",
  });
  receivedTodos.push({
    id: 3,
    type: 1,
    location: 0,
    text: "wawa-2-kasa-1",
    destination: "inpost",
    ip: "192.168.0.1",
    isReservred: true,
    reservedTill: "2022-04-08T23:30:10",
  });
  receivedTodos.push({
    id: 4,
    type: 0,
    location: 1,
    text: "rybnik-1",
    destination: "bilety",
    ip: "192.168.0.1",
    isReservred: false,
    reservedTill: "2022-04-08T23:30:10",
  });
  const filtr = { filtrType: 0 };

  useEffect(() => {
    setConstatnt(receivedTodos);
    setSearch(receivedTodos);
    console.log("Default set");
  }, []);

  const handleFilter = () => {
    setSearch("Constat:" + constat);
    console.log("handle");
    console.log(filtr);
    if (filtr.filtrType === 2) {
      setSearch(constat);
      return;
    }
    const updated = constat.filter((item) => item.type === filtr.filtrType);
    console.log(updated);
    setSearch(updated);
  };

  const handleAuthorityClaim = () => {
    setIsAuthorized(true);
  };

  useEffect(() => {
    console.log(authority);

    localStorage.setItem("authority", authority);
  }, [authority]);
  const handleChange = async (e) => {
    setAuthority(e.target.value);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <form className="d-flex">
            <input
              className="form-control me-2"
              placeholder={isAuthorized ? { authority } : "Imie i nazwisko"}
              aria-label="Search"
              disabled={isAuthorized}
              value={authority}
              onChange={handleChange}
            />
            <button
              className={
                isAuthorized
                  ? "btn btn-outline-success disabled"
                  : "btn btn-outline-success"
              }
              type="button"
              onClick={() => handleAuthorityClaim()}
            >
              Zatwierdz
            </button>
          </form>
        </div>
      </nav>

      <ButtonPanel handleFilter={handleFilter} filtr={filtr}></ButtonPanel>
      <TodoSearchDisplay todos={serach}></TodoSearchDisplay>
    </div>
  );
}

export default TodoSearch;
