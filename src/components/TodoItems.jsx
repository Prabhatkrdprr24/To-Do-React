import ToDoItem from "./ToDoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({todoItems, onDeleteClick}) => {
    return (
        <div className= {styles.itemClass}>
            {todoItems.map((todoItem, index) => (
                <ToDoItem 
                key = {index} 
                todoName = {todoItem.todoName} 
                todoDate = {todoItem.todoDate} 
                onDeleteClick = {onDeleteClick} 
                />
            ))}
        </div>
    );
}

export default TodoItems;