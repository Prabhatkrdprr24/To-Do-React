import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
    todoItems : [],
    addNewItem : () => {},
    deleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {

  let newTodoItems = currTodoItems;
  if(action.type === "NEW_ITEM"){
    
    newTodoItems = [
      ...currTodoItems,
      { todoName: action.payload.todoName, todoDate: action.payload.dueDate },
    ];

  }
  else if(action.type === "DELETE_ITEM"){
    newTodoItems = currTodoItems.filter(
      (item) => item.todoName !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({children}) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, dueDate) => {
    
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName: todoName,
        dueDate: dueDate
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {

    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName : todoItemName
      },
    }
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{
        todoItems : todoItems,
        addNewItem,
        deleteItem: deleteItem,
        }}
    >
    {children}
    </TodoItemsContext.Provider>
  );
}

export default TodoItemsContextProvider;