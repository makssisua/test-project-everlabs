import React, { useContext, useState } from "react";
import { TodosContext } from "../../context/todosContext";

export const AddTodos = () => {
  const { addTodos } = useContext(TodosContext);
  const [inputValue, setInputValue]= useState('')

  const handleInputChange = (event) => setInputValue(event.target.value);
  const handleAddTodo = () => {
    if (inputValue !== '') {
      addTodos(inputValue);
      setInputValue('')
    }
  };

  return (
    <section className='d-flex gap-2 pb-4'>
      <input
        value={inputValue}
        type="text"
        className="form-control"
        placeholder="Ваше завдання"
        aria-describedby="button-addon2"
        onChange={handleInputChange}
      />
      <button
        className="btn btn-primary"
        type="button"
        id="button-addon2"
        onClick={handleAddTodo}
      >
        Додати
      </button>
    </section>
  );
}
