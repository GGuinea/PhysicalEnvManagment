import axios from "axios";
import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  const addTodo = async (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    await axios
      .post("http://127.0.0.1:8080/todo/add", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
        name: "name",
        description: todo.text,
        status: "rozwiazane",
      })
      .then((res) => {
        todo.id = res.data.id;
      });
    await getAll();
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  const removeTodo = async (id) => {
    const url = `http://127.0.0.1:8080/todo/${id}`;
    await axios.delete(`${url}`);
    await getAll();
  };

  const getAll = async () => {
    await axios
      .get("http://127.0.0.1:8080/todo", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then((res) => {
        const data = res.data;
        const receivedTodos = [];
        data.map((object) => {
          console.log(object.id);
          receivedTodos.push({ id: object.id, text: object.description });
        });
        console.log(receivedTodos);
        setTodos(receivedTodos);
      });
  };

  return (
    <div>
      <h1>List zadan</h1>
      <TodoForm onSubmit={addTodo}></TodoForm>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      ></Todo>
    </div>
  );
}

export default TodoList;
