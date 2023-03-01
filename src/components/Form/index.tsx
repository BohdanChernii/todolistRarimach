import React, {FC, FormEvent, useState} from 'react';

import {useAppDispatch} from "../../hooks/redux.hook";

import {todosActions} from "../../redux/slices/todos.slice";

import './form.scss'

const Form:FC = () => {
  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const dispatch = useAppDispatch()
  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(todosActions.addTodo({title, description}))
    setTitle('')
    setDescription('')
  }

  return (
    <form className='todosForm' onSubmit={(e)=>onSubmit(e)}>
      <div className="todosForm__item">
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id='title'
          name='title'
          required={true}
          placeholder='Enter title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="todosForm__item">
        <label htmlFor='description'>Description</label>
        <input
          type="text" id='description'
          name='description'
          required={true}
          placeholder='Enter description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}/>
      </div>
      <button className="todosForm__submit" type='submit'>Create</button>
    </form>
  );
};

export default Form;