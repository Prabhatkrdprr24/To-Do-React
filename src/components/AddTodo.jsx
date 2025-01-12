function AddTodo() {
  return (
    <div className="container">
      <div className="row Pk-row">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Add Task"
          ></input>
        </div>
        <div className="col-4">
          <input type="date" className="form-control"></input>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success Pk-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
