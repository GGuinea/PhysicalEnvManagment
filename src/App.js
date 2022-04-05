import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="todo-app">
        <div className="header">
        </div>
        <div className="content">
            <TodoSearch></TodoSearch>
        </div>
    </div>
  );
}

export default App;
