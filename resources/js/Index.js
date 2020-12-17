import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Edit from './components/Edit';
import Add from './components/Add';


ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" component={Add} />
            <Route path="/:id/edit" component={Edit} />
        </Switch>
    </Router>,
    document.getElementById("app")
);



