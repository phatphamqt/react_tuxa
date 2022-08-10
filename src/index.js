import './assets/css/bootstrap-tcl.css'
import './assets/css/main.css'
// import "../node_modules/bootstrap/dist/css";
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import {render} from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux'
import store from './store'


const container =   document.getElementById('root')

render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  container
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
