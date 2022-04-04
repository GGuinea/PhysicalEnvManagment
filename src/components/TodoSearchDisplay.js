import React, { useState } from "react";
import Modal from "./Modal";

function TodoSearchDisplay({ todos }) {
  const [todoItem, setTodoItem] = useState("");

  const handleClickOpen = (todo) => {
    setTodoItem(todo);
    console.log(todo);
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);
const list = todos.map((todo, index) => 
     <div className="todo-row" key={index}>
      <div key={todo.id} onClick={() => handleClickOpen(todo)}>
        {todo.text}
      </div>
    </div>
)

return (
<div>
    {list}
      {isOpen && <Modal setOpenModal={setIsOpen} todoItem={todoItem} />}
</div>
)
}

export default TodoSearchDisplay;
