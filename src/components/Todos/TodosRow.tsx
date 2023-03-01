import React from 'react';

import Modal from "../Modal";

import {ITodo} from "../../interfaces";

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hook";

import {todosActions} from "../../redux/slices/todos.slice";

const TodosRow = ({id, description, title, status}: ITodo) => {
  const {showModal} = useAppSelector(state => state.todosReducer)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(todosActions.changeStatus(id))
    dispatch(todosActions.showModal(false))
  }

  return (
    <>
      <div className='todos__row' onClick={() =>dispatch(todosActions.showModal(true))}>
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
      {showModal ? <Modal description={description} title={title} status={status}/> : null}
    </>
  );
};

export default TodosRow;