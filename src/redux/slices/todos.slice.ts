import {ITodo} from "../../interfaces";
import {createSlice} from "@reduxjs/toolkit";

interface IState {
  todos: ITodo[] | []
  item: ITodo
  showModal: boolean
}

const initialState: IState = {
  todos: [],
  item: {
    id: 0,
    description: '',
    title: '',
    status: false,
  },
  showModal: false
}

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    getTodos: ((state, action) => {
      state.todos = action.payload
    }),
    addTodo: (state, action) => {
      state.todos = [...state.todos, {id: state.todos.length + 1, ...action.payload, status: false}]
    },
    changeStatus: ((state, action) => {
      state.todos[state.todos.findIndex((todo) => todo.id === action.payload)].status =
        !state.todos[state.todos.findIndex((todo) => todo.id === action.payload)].status
    }),
    showModal: ((state, action) => {
      state.showModal = action.payload
    }),
  }
})
const {
  reducer: todosReducer,
  actions: {getTodos, addTodo, showModal, changeStatus}
} = todosSlice

const todosActions = {
  getTodos,
  addTodo,
  showModal,
  changeStatus
}

export {todosReducer, todosActions, todosSlice}