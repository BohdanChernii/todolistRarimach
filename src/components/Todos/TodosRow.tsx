import React from 'react';

import {ITodo} from "../../interfaces";

import {useAppDispatch} from "../../hooks/redux.hook";

import {todosActions} from "../../redux/slices/todos.slice";
import {useNavigate} from "react-router";

const TodosRow = ({id, description, title, status}: ITodo) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handleChange = () => {
    dispatch(todosActions.changeStatus(id))
    navigate('/')
  }

  const onClick = () => {
    navigate('/modal', {state: {title, description, status}})
  }
  return (
      <div className='todos__row' onClick={() => onClick()}>
        <p className='todos__row-item'>{id}</p>
        <p className='todos__row-item'>{title}</p>
        <p className='todos__row-item'>{description}</p>
        <div className="todos__row-item">
          <input
            className='status' type="checkbox"
            onChange={() => handleChange()}
            value={status ? "1" : "0"}
          />
        </div>
      </div>
  );
};

export default TodosRow;