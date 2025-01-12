import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {

  const todoItems = [
    {
      todoName: "Buy Milk",
      todoDate: "12-1-2025"
    },
    {
      todoName: "Go To College",
      todoDate: "12-1-2025"
    },
    {
      todoName: "like this video",
      todoDate: "right now"
    }
  ];

  return (
    <center className="todo-container">

      <AppName />
      <AddTodo />
      <TodoItems todoItems = {todoItems}></TodoItems>

    </center>
  );
}

export default App;
