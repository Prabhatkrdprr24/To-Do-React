import { useState } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({handleAddTodo}) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTodoName = (event) => {
    console.log(event.target.value);
    setTodoName(event.target.value);
  }

  const handleTodoDate = (event) => {
    console.log(event.target.value);
    
    setDueDate(event.target.value);
  }

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    console.log("handle clicked triggered " + todoName, dueDate);
    
    handleAddTodo(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  }

  return (
    <div className="container">
      <form className="row Pk-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
            onChange={(event) => handleTodoName(event)}
            value={todoName}
          ></input>
        </div>
        <div className="col-4">
          <input 
          type="date" 
          className="form-control"
          onChange={(event) => handleTodoDate(event)}
          value={dueDate}
          >
          </input>
        </div>

        <div className="col-2">
          <button 
          className="btn btn-success Pk-button"
          >
            <MdAddToPhotos />
          </button>
        </div>

      </form>
    </div>
  );
}

export default AddTodo;
