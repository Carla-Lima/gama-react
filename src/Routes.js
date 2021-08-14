import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Repositorios from './pages/Repositorios';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositorios' component={Repositorios} />
            </Switch>
        </BrowserRouter>
    )
}