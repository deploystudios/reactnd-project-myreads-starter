import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import BookSearch from './BookSearch';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={ App } />
            <Route path='/search' component={ BookSearch } />
        </Switch>
    </BrowserRouter>
)

export default Router;