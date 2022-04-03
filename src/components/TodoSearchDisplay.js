import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import TodoForm from "./TodoForm";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

function TodoSearchDisplay({ todos, completeTodo }) {
  const [open, setOpen] = React.useState(false);
  const [todoItem, setTodoItem] = useState("");

  const handleClickOpen = (todo) => {
    setTodoItem(todo);
    console.log(todo);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => handleClickOpen(todo)}>
        {todo.text}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{todoItem.text}</DialogTitle>
        <DialogContent>
            <DialogContent></DialogContent>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Nie
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Tak
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  ));
}

export default TodoSearchDisplay;
