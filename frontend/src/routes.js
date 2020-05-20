import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Contato from './pages/Contato';
import Experience from './pages/experience';
import Certification from './pages/Certification';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/certification" component={Certification} />
                <Route path="/contato" component={Contato} />
                <Route path="/experience" component={Experience} />
            </Switch>
        </BrowserRouter>
    )
}