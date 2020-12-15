import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';

function Index() {
    return (
        <Router>
            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={Add} />
                <Route path="/:id/edit" exact component={Edit} />
            </switch>
        </Router>
    );
}

export default Index;


