import logo from './logo.svg';
import './App.css';
import React, {useRef, useState} from "react";
import SBB from "./SBB";
import {Route, Switch, Link} from "react-router-dom";
import Stationboard from "./StationBoard";


export default function App() {

    return (
        <div>
            <nav>
                <Link to="/">Fahrplan</Link>
                <br/>
                <Link to="/stationboard">Stationboard</Link>
                <br/>
                <Link to="/takemehome">Users</Link>
                <br/>
            </nav>
            <Switch>
                <Route exact path="/" component={SBB}/>
                <Route path="/stationboard" component={Stationboard}/>
                <Route path="/takemehome" component={SBB}/>
            </Switch>
        </div>
    );
}

