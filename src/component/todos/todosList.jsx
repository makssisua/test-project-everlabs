import React, { useContext, useState } from "react";
import { TodosContext } from "../context/todosContext";
import { AddTodos } from './addTodos/addTodos'
import { TodoItem } from "./todoItem";

export const TodosList = () => {
  const { todos } = useContext(TodosContext);
  const [filterBy, setFilterBy] = useState('all');

  const filterTodos = () => {
    let filteredByStatus
    switch (filterBy) {
      case 'active':
        filteredByStatus = todos.filter(todo => !todo.status);
        break;

      case 'completed':
        filteredByStatus = todos.filter(todo => todo.status);
        break;

      default:
        filteredByStatus = [...todos];
    }

    return filteredByStatus.sort((a, b) => a.status - b.status)
  };

 const handleStatusFilter = (e) => {
   setFilterBy(e.target.value)
  }

  return (
    <>
      <h1>Todos:</h1>

      <AddTodos />

      <div className="input-group mb-3">
        <span className="fw-bold p-2">Статус</span>
        <select
          className="form-select"
          id="inputGroupSelect01"
          value={filterBy}
          onChange={(e) => handleStatusFilter(e) }
        >
          <option value="all">Всі</option>
          <option value="active">Активні</option>
          <option value="completed">Завершині</option>
        </select>
      </div>

      <ul className="list-group">
        {filterTodos()?.map(todo => (
          <li
            className={"list-group-item d-flex justify-content-between align-items-center"}
            key={todo.id}
          >
            <TodoItem todo={todo} />
          </li>)
        )}
      </ul>
    </>
  );
};
