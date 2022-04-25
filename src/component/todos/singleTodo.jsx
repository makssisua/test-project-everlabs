import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TodosContext } from "../../context/todosContext";

export const SingleTodo = () => {
  const { id } = useParams();
  const { todos } = useContext(TodosContext);
  const currentTodo = todos.find(el => el.id === Number(id))

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h6>Справа №{id}</h6>
        </div>
        <div className="card-body">
          <h4 className="card-title">{currentTodo.title}</h4>
          <p className="card-text">
            Статус: {currentTodo.status
            ? <span className='text-success'> Виконано</span>
            : <span className='text-danger'> Не виконано</span>
          }
          </p>
        </div>
      </div>
    </>
  );
}
