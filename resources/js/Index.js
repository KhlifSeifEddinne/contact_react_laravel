import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';

function Index() {
    return (
        <BrowserRouter>
            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={Add} />
                <Route path="/:id/edit" exact component={Edit} />
            </switch>
        </BrowserRouter>
    );
}

export default Index;


