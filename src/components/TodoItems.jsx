import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {

    const contextObj = useContext(TodoItemsContext);
    const todoItems = contextObj.todoItems;

    return (
        <div className= {styles.itemClass}>
            {todoItems.map((todoItem, index) => (
                <ToDoItem 
                key = {index} 
                todoName = {todoItem.todoName} 
                todoDate = {todoItem.todoDate} 
                />
            ))}
        </div>
    );
}

export default TodoItems;