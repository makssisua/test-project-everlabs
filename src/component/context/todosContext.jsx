import { createContext, useEffect, useState } from "react";

export const TodosContext = createContext(null);

export const TodosListProvider = (props) => {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('todos')
    const initialValue = JSON.parse(localData);
    return initialValue || '';
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodos = (title) => {
    setTodos([...todos, {title, status: false, id: todos.length + 1}])
  };
  const deleteTodos = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  };
  const changeStatus = (id) => {
    const todo = todos.find(el => el.id === id)

    setTodos([
      ...todos.filter(todo => todo.id !== id),
      {...todo, status: !todo.status}
    ])
  };

  return (
    <TodosContext.Provider value={{ todos, addTodos, deleteTodos, changeStatus }}>
      {props.children}
    </TodosContext.Provider>
  );
}
