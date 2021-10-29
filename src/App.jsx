import React, {Component} from 'react';
import {Route,Redirect,Switch} from "react-router-dom";
import Login from './pages/Login'
import Home from './pages/Home'

class App extends Component {
    render() {
        return (
            <div>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
                <Redirect to="/login"/>
            </Switch>
            </div>
        );
    }
}

export default App;