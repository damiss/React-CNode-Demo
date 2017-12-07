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
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
            classNameAc: "nav-tab",
            classActive: "active"
        }
    }
    handleClick(index) {
        this.setState({
            currentIndex: index
        })
    }

    render() {
        let linkNavTab = [
            { link: "/", className: "nav-tab", inner: "全部" },
            {link: "/good", className: "nav-tab", inner: "精华"},
            { link: "/ask", className: "nav-tab", inner: "提问" },
            { link: "/share", className: "nav-tab", inner: "分享" },
            { link: "/job", className: "nav-tab", inner: "工作" }
        ]

        return (
            <Router>
                <div className="wraper">
                    <ul className="nav">
                        {/* <li className={this.state.classNameAc + " " + this.state.classActive}><Link to="/" >全部</Link></li>
                        <li className="nav-tab"><Link to="/good" >精华</Link></li>
                        <li className="nav-tab"><Link to="/ask" >问题</Link></li>
                        <li className="nav-tab"><Link to="/share" >分享</Link></li>
                        <li className="nav-tab"><Link to="/job" >工作</Link></li> */}
                        {
                            linkNavTab.map((item,index)=> {
                                let activeLink = index === this.state.currentIndex ? "nav-tab active" : "nav-tab"
                                return (
                                    <li key={index} onClick={this.handleClick.bind(this, index)} className={activeLink}>
                                        <Link to={item.link}>{item.inner}</Link>
                                    </li>
                                )
                            })
                        }
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