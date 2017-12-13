import React, { Component } from 'react';
import Default from './../Main/Default';

export default class Mine extends Component {
    render() {
        const history = this.props.history;
        const whichTab = "yellowTab"
        return (
            <div>
                <div>mine</div>
                <Default history={history} whichTab={whichTab} />
            </div>
        )
    }
}