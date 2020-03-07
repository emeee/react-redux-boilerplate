import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../components/home/Home";
import React from "react";

const Routes =() =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
        </Switch>
    </BrowserRouter>;

export default Routes;
