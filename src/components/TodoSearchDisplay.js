import React, { useState } from "react";
import Helmet from "react-helmet";
import Modal from "./Modal";
import MyTimer from "./MyTimer";

function TodoSearchDisplay({ todos }) {
  const [todoItem, setTodoItem] = useState("");

  const handleClickOpen = (todo) => {
    setTodoItem(todo);
    console.log(todo);
    setIsOpen(true);
  };

  const getTime = (reservedTill) => {
return new Date(reservedTill).getTime()
  };

  const [isOpen, setIsOpen] = useState(false);
  const list = todos.map((todo, index) => (
    <div key={index}>
      <div
        key={todo.id}
        className={
          todo.isReservred === true ? "simpleBorderReserved" : "simpleBorder"
        }
      >
        <div>
          <div class="hstack gap-3">
            <button
              class="btn btn-outline-success me-2"
              type="button"
              onClick={() => handleClickOpen(todo)}
            >
              OTWÓRZ
            </button>
            <div class="bg-light border">{todo.text}</div>
            <div class="bg-light border">{todo.destination}</div>
            <div class="bg-light border">{todo.ip}</div>
            <div class="bg-light border ms-auto">{todo.reservedTo}</div>
            <div class="bg-light border ">
              <MyTimer expiryTimestamp={getTime(todo.reservedTill)}></MyTimer>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      {list}
      {isOpen && <Modal setOpenModal={setIsOpen} todoItem={todoItem} />}
    </div>
  );
}

export default TodoSearchDisplay;
