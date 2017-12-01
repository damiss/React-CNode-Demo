import React, { Component } from 'react';
import { observable, autorun } from 'mobx';
import {observer} from 'mobx-react';
import Ask from './../ask/Ask';

class Home extends Component {
    componentDidMount() {
        const store = this.props.store.data
        console.log(store)
    }
    render() {
        return (
            <div>
                <Ask />
            </div>
        )
    }
}
export default Home;