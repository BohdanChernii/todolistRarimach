import {combineReducers} from "redux";
import {todosReducer} from "./slices/todos.slice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  todosReducer
})
const setUpStore = () => configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']
export {setUpStore}

