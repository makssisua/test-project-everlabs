import React, { useContext } from "react";
import { TodosContext } from "../context/todosContext";
import { Link } from "react-router-dom";

export const TodoItem = ({ todo }) => {
  const { deleteTodos, changeStatus } = useContext(TodosContext);

  const handleDeleteTodo = (id) => deleteTodos(id);
  const handleChangeStatus = (id) => changeStatus(id);

  return (
      <>
        <input
          className={todo.status ? "form-check-input" : "form-check-input"}
          type="checkbox"
          id={todo.id}
          checked={todo.status}
          onChange={() => handleChangeStatus(todo.id)}
        />

        <Link className='text-decoration-none p-3' to={`${todo.id}`}>
          <span className={todo.status ? "text-decoration-line-through" : ""}>
              {todo.title}
            </span>
        </Link>

        <button
          type="button"
          className="btn btn-primary"
          onClick={() =>handleDeleteTodo(todo.id)}
        > x </button>
      </>
  );
}
