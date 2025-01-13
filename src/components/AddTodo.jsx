import { useState, useRef } from "react";
import { MdAddToPhotos } from "react-icons/md";

function AddTodo({handleAddTodo}) {

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    handleAddTodo(todoName, dueDate);
  }

  return (
    <div className="container">
      <form className="row Pk-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
            ref = {todoNameElement}
          ></input>
        </div>
        <div className="col-4">
          <input 
          type="date" 
          className="form-control"
          ref={todoDateElement}
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
