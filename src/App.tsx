import React from 'react';

import './App.css';
import Form from "./components/Form";
import Todos from "./components/Todos";
import {Route, Routes} from "react-router";
import Modal from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path={'/'} element={<Todos/>}>
        <Route path={':modal'} element={<Modal/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
