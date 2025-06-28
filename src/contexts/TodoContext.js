import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1222,
      todo: "todo msg (THE REAL OG!)",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const Todoprovider = TodoContext.Provider;
