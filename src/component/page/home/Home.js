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
import { List } from 'antd-mobile';
import axios from 'axios';

import Ask from './../ask/Ask';
import Tab from './../component/Tab';
import store from './../../store/Store'

import Detail from './../detail/Detail'
import ListItems from './../component/ListItems'

const Item = List.Item;
const Brief = Item.Brief;
class Home extends Component {

	constructor({ match }) {
		super();
		this.state = {
			data: [],
			match,
			disabled: false
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
				console.log(res)
				this.setState({ "data": data });
			});
		console.log("componentDidMount")
	}
	state = {
		disabled: false,
	}
	
	render() {
		console.log(this.state.match)
		const ListTitStyle = {
			display: "inline-block",
			width: "70vw",
			color: "#666"
		}
		const ListTitAva = {
			display: "inline-block",
			height: "30px",
			width: "30px",
			float: "right"
		}
		const ImgSize = {
			width: "100%"
		}
		return (
			<div>
				<ul>
					{
						this.state.data.map((data) => {
							return (
								<li key={data.id} onClick={this.clickHandle.bind(this,data)}>
									<div className="List-title">
										<span style={ListTitStyle}>{data.title}</span>
										<span className="" style={ListTitAva}><img style={ImgSize} src={data.author.avatar_url} alt=""/></span>
									</div>
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


