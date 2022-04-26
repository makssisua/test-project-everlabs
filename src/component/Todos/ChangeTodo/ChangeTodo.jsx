import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { TodosContext } from "../../../context/todosContext";
import edit from "./edit.png"
import "./ChangeTodo.css"

export const ChangeTodo = ({ todo }) => {
  const [show, setShow] = useState(false);
  const [haveError, setHaveError] = useState(false)
  const [changedTitle, setChangedTitle] = useState(todo.title)
  const { changeTitle } = useContext(TodosContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleChange = () => {
    if (changedTitle.length !== 0) {
      if (changedTitle !== todo.title) {
        changeTitle(todo.id, changedTitle);
        setHaveError(false)
        handleClose()
      } else {
        handleClose()
      }
    } else {
      setHaveError(true)
    }
  }

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShow}
      >
          <img className="edit-img" src={edit} alt=""/>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Відредагуйте вашу справу</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section className='d-flex gap-2 pb-2'>
            <input
              value={changedTitle}
              type="text"
              className="form-control"
              aria-describedby="button-addon2"
              onChange={(e) => (setChangedTitle(e.target.value))}
            />
            <button
              className="btn btn-primary"
              type="button"
              id="button-addon2"
              onClick={handleChange}
            >
              Зберегти
            </button>
          </section>
          {haveError && (
            <div className="p-2 text-danger">
              Поле не може бути пустим
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
