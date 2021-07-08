import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import SBB from "./SBB";
import {Route, Switch, Link, useHistory} from "react-router-dom";
import Stationboard from "./StationBoard";
import BMI from "./BMI";


export default function SBBMain() {

    let history = useHistory()

    function handleHome() {
        history.push("/")
    }

    function handleBack() {
        history.goBack()// to where I came from
    }

    return (
        <div>
            <nav>
                <Link to="/">Fahrplan</Link>
                <br/>
                <Link to="/stationboard">Stationboard</Link>
                <br/>
                <Link to="/home">Home</Link>
                <br/>
            </nav>
            <Switch>
                <Route exact path="/" component={SBB}/>
                <Route path="/stationboard" component={Stationboard}/>
                <Route path="/home" component={SBBMain}/>
                <Route path="/bmi/bmiID" component={BMI}/>
            </Switch>
            <br/>
            <button type="button" onClick={handleHome}>Go home</button>
            <button type="button" onClick={handleBack}>Go back</button>
        </div>
    );
}