import React from 'react';

import {useAppDispatch} from "../../hooks/redux.hook";

import {todosActions} from "../../redux/slices/todos.slice";

import {ITodo} from "../../interfaces";

import './modal.scss'
import {useLocation, useNavigate} from "react-router";

const Modal = () => {
  const dispatch = useAppDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const onClose = () => {
    navigate('/')
  }

  return (
    <div className='modal'>
      <div className='modalContent'>
        <h2 className='modalContent__title'>{location.state.title}</h2>
        <div className="modalContent__description">
          <h3>Description:</h3>
          <p>{location.state.description}</p>
        </div>
        <div className="modalContent__status">
          <p>Status:</p>
          <input type="checkbox" checked={location.state.status} readOnly={true}/>
        </div>
        <button
          className="modalContent__close" onClick={() => onClose()}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;