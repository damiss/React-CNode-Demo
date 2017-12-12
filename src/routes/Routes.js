import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from 'react-router-dom';

import Main from './../pages/Main/index';
import Write from './../pages/Main/index';
import Message from './../pages/Message/index';
import Mine from './../pages/Mine/index';

export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Main} />
                    <Route path="/write" component={Write} />
                    <Route path="/message" component={Message} />
                    <Route path="/mine" component={Mine} />
                </div>
                
            </Router>
        )
    }
}