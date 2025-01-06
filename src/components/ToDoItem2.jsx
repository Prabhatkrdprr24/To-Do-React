function ToDoItem2() {

    let todoName = "Go To College";
    let todoDate = "25/12/2024";

  return (
    <div class="container">
      <div class="row Pk-row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger Pk-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem2;  