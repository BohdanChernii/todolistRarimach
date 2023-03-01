import React from 'react';

import Title from "./Title";

import TodosRow from "./TodosRow";

import {useAppSelector} from "../../hooks/redux.hook";

import './todos.scss'

const Todos = () => {
  const {todos} = useAppSelector(state => state.todosReducer)
  console.log(todos);
  return (
    <div className='todos'>
      <Title/>
      {todos.map(todo => (
        <TodosRow key={todo.id} description={todo.description} title={todo.title} status={todo.status} id={todo.id}/>
      ))}
    </div>
  );
};

export default Todos;