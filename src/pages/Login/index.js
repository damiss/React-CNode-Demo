import React, { Component } from 'react';
import Default from './../Main/Default';

export default class Login extends Component {
    render() {
        const history = this.props.history;
        return (
            <div>
                <div>标题:<input type="text" name="" id="" placeholder="输入标题" /></div>
            </div>
        )
    }
}