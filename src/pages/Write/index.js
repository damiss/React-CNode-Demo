import React, { Component } from 'react';
import Default from './../Main/Default';
import dB from './../../utils/index'

export default class Wrte extends Component {
    componentWillMount() {
        if(!dB.get("success_token")) {
            this.props.history.push("/login")
        }
    }
    render() {
        const history = this.props.history;
        const whichTab = "redTab"
        return (
            <div>
                <div>write</div>
                <Default history={history} whichTab={whichTab} />
            </div>
        )
    }
}