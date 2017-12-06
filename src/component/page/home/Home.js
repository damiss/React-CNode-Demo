import React, { Component } from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from 'react-router-dom'
import axios from 'axios';
import Ask from './../ask/Ask';
import Tab from './../component/Tab';
import store from './../../store/Store'

import Detail from './../detail/Detail'
import ListItems from './../component/ListItems'


class Home extends Component {

	constructor({ match }) {
		super();
		this.state = {
			data: [],
			match
		}
	}
	clickHandle(data) {
		this.props.history.push('/detail/' + data.id)
	}
	componentDidMount() {
		// store.initData();
		axios.get(`https://cnodejs.org/api/v1/topics`)
			.then(res => {
				const data = res.data.data;
				console.log(res.data.data)
				this.setState({ data });
			});
		console.log("componentDidMount")
	}
		
	render() {
		console.log(this.state.match)
		return (
			<div>
				<ul>
					{
						this.state.data.map((data) => {
							return (
								<li key={data.id} onClick={this.clickHandle.bind(this,data)} dangerouslySetInnerHTML={{ __html: `${data.title}` }}>
								</li>
							)
						}
						)
					}
				</ul>
			</div>
		)
	}
}
export default Home;


