function ToDoItem({todoName, todoDate}) {

  return (
    <div className="container">
      <div className="row Pk-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger Pk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;  