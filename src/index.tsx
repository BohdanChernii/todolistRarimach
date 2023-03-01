import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {setUpStore} from "./redux/store";

const store = setUpStore()
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
<Provider store={store}>
  <App />
</Provider>
);

