import React, { Component } from 'react';
import Default from './../Main/Default';

export default class Message extends Component {
    render() {
        const history = this.props.history;
        const whichTab = "greenTab"
        return (
            <div>
               <div>message</div>
                <Default history={history} whichTab={whichTab} />  
            </div>
            
        )
    }
}