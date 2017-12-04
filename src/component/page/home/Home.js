import React, { Component } from 'react';
import { observable, autorun } from 'mobx';
import { observer } from 'mobx-react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect
} from 'react-router-dom'
import axios from 'axios';
import Ask from './../ask/Ask';
import Tab from './../component/Tab';
import store from './../../store/Store'

import Detail from './../detail/Detail'

class Home extends Component {
	/*     componentDidMount() {
			var store = this.props.store.data;
			console.log("Home 加载时的数据")
			console.log(store)
		} */

	/* componentDidMount() {
		 store.initData();
		 this.setState({
			 data: store.data
		 })
	 }
		 */
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		// store.initData();
		axios.get(`https://cnodejs.org/api/v1/topics`)
			.then(res => {
				const data = res.data.data;
				console.log(res.data.data)
				this.setState({ data });
				/* this.setState({
					data: res
				}); */
				// console.log("axios加载数据");
				// console.log(this.state.data)
			});
		console.log("componentDidMount")
	}
	render() {
		return (
			<Router>
				<Route render={({ location }) => (
					<div>
						<ul>
							{
								this.state.data.map((data) => {
									return (
										<Link to='/detail' key={data.id} ><li key={data.id} dangerouslySetInnerHTML={{ __html: `${data.title}` }}>
										</li></Link>
									)
								}
								)
							}
						</ul>
						<Route
							location={location}
							key={location.key}
							path="/detail"
							component={Detail}
						/>
					</div>

				)} />

			</Router>

		)
	}
}
export default Home;