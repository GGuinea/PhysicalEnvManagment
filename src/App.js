import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="todo-app">
      <TodoList></TodoList>
      <TodoSearch></TodoSearch>
    </div>
  );
}

export default App;
