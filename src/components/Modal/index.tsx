import React from 'react';

import {useAppDispatch} from "../../hooks/redux.hook";

import {todosActions} from "../../redux/slices/todos.slice";

import {ITodo} from "../../interfaces";

import './modal.scss'

const Modal = ({description, title, status}: ITodo) => {
  const dispatch = useAppDispatch()
  return (
    <div className='modal'>
      <div className='modalContent'>
        <h2 className='modalContent__title'>{title}</h2>
        <div className="modalContent__description">
          <h3>Description:</h3>
          <p>{description}</p>
        </div>
        <div className="modalContent__status">
          <p>Status:</p>
          <input type="checkbox" checked={status} readOnly={true}/>
        </div>
        <button
          className="modalContent__close"
          onClick={() => dispatch(todosActions.showModal(false))}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;