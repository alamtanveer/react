import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, RouteChildrenProps } from 'react-router-dom';
import Login from './Components/Auth/Login';
import Solution from './Components/Solution/Solution';
import Resource from './Components/Resource/Resource';

ReactDOM.render((
    <Router>
            {/* <Route exact path = "/" component = {Login}/> */}
            
            <Route path = "/" component = {App}/>
            <Route exact path = "/" component = {Solution}/>
            <Route path = "/solution" component = {Solution}/>
            <Route path = "/resource" component = {Resource}/>
    </Router>
 ), document.getElementById('root'));
