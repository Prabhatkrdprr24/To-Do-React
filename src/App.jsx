import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);
  const handleAddTodo = (todoName, dueDate) => {
    console.log("In app.jsx handleAddTodo is clicked : ", todoName, dueDate);
    
    const newTodoItems = [...todoItems, {todoName: todoName, todoDate: dueDate}];
    setTodoItems(newTodoItems);
  }

  const handleDeleteItem = (todoItemName) => {
    console.log("In app.jsx handleDeleteItem is clicked : ", todoItemName);
    const newTodoItems = todoItems.filter(item => item.todoName !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className="todo-container">

      <AppName />
      <AddTodo handleAddTodo ={handleAddTodo}/>
      {todoItems.length === 0 && <WelcomeMessage />}
      
      <TodoItems 
      todoItems = {todoItems} 
      onDeleteClick={handleDeleteItem}
      >
      </TodoItems>

    </center>
  );
}

export default App;
