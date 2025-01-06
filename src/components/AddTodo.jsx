function AddTodo() {
  return (
    <div class="container">
      <div class="row Pk-row">
        <div class="col-6">
          <input
            type="text"
            class="form-control"
            placeholder="Add Task"
          ></input>
        </div>
        <div class="col-4">
          <input type="date" class="form-control"></input>
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success Pk-button">
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
