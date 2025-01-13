import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoName, dueDate) => {
    console.log("In app.jsx handleAddTodo is clicked : ", todoName, dueDate);

    setTodoItems((currVal) => {
      const newTodoItems = [
        ...currVal,
        { todoName: todoName, todoDate: dueDate },
      ];
      return newTodoItems;
    });
  };

  const deleteItem = (todoItemName) => {
    console.log("In app.jsx handleDeleteItem is clicked : ", todoItemName);
    const newTodoItems = todoItems.filter(
      (item) => item.todoName !== todoItemName
    );
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems : todoItems,
      addNewItem,
      deleteItem: deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />

        <TodoItems ></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
