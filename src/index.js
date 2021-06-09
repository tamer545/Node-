import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import RadioButton from './RadioButton'
import Listen from './Listen'
import BMI from './BMI'
import TwoListView from './TwoListView'
import API from './API'
import APICards from './APICards'
import reportWebVitals from './reportWebVitals';
import BootstrapBsp from "./BootstrapBsp";
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
    <APICards />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
