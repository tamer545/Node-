import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from "react-router-dom";
import SBBMain from './SBBMain'
import JavaScriptTricks from "./JavaScriptTricks";
import CounterTest from "./CounterTest";
import UseRefTest from "./UseRefTest";
import RemountTest from "./RemountTest";
import ReactChildrenTest from "./ReactChildrenTest";
import BMI from "./BMI";
import LikeButton from "./LikeButton";
import DropDownVorstellung from "./DropDownVorstellung";
import ZweiAbhaengigeDropDowns from "./ZweiAbhaengigeDropDowns";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ZweiAbhaengigeDropDowns/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
