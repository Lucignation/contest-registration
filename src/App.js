import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';

import './App.css';

export default function App(){
    return(
        <div>
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/contest-registration"  component={Register}/>
                </Switch>
            </Router>
        </div>
    )
}