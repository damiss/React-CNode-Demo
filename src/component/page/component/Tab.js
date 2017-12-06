import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

import Ask from './../ask/Ask'
import Good from './../good/Good'
import Job from './../job/Job'
import Home from './../home/Home'
import Share from './../share/Share'
import Detail from './../detail/Detail'

class Tab extends Component {
    render() {
        return (
            <Router>
                <div className="nav">
                    <ul>
                        <li className="nav-tab"><Link to="/" >全部</Link></li>
                        <li className="nav-tab"><Link to="/good" >精华</Link></li>
                        <li className="nav-tab"><Link to="/ask" >问题</Link></li>
                        <li className="nav-tab"><Link to="/share" >分享</Link></li>
                        <li className="nav-tab"><Link to="/job" >工作</Link></li>
                    </ul>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/good" component={Good} />
                        <Route path="/ask" component={Ask} />
                        <Route path="/share" component={Share} />
                        <Route path="/job" component={Job} />
                        <Route path="/detail/:id" component={Detail} />
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default Tab;