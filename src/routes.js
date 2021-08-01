// Library Module Imports
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Inquiry from './components/Inquiry';
import Menu from './components/Menu';
import Home from './components/Home';

const RouteComponent = ({ childProps }) => {
    return <Switch>
                <Route path="/" exact component={Home} props={childProps} />
                <Route path="/inquiry" exact component={Inquiry} props={childProps} />
                <Route path="/menu" exact component={Menu} props={childProps} />
                <Route path="*" render={() => <Redirect to={'/'} />} />
            </Switch>
}

export default RouteComponent;