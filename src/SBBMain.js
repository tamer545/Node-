import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import SBB from "./SBB";
import { Route, Switch } from "react-router-dom";
import Stationboard from "./StationBoard";




export default function App() {

    return (
        <Switch>
            <Route exact path="/" component={SBB}/>
            <Route path="/stationboard" component={Stationboard}/>
            <Route path="/reise" component={SBB}/>
            <Route path="/takemehome" component={SBB}/>
        </Switch>

    );
}

