import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import Tab from './../page/component/Tab'

export default class Router2 extends React.Component {
    render() {
        return (
            <div>
                <Tab />
                <div>12121212</div>
            </div>
        )
    }
}