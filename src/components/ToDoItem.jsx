import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";

function ToDoItem({todoName, todoDate}) {

  const contextObj = useContext(TodoItemsContext);
  const onDeleteClick = contextObj.deleteItem;

  return (
    <div className="container">
      <div className="row Pk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button 
          type="button" 
          className="btn btn-danger Pk-button"
          onClick = {() => onDeleteClick(todoName)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;  