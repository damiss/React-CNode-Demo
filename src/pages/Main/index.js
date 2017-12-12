import { Tabs, WhiteSpace, Badge, TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import axios from './../../axios/index';
import { browserHistory } from 'react-router';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from 'react-router-dom'

import List from './../../components/List/List'
import ListItem from './../../components/ListItem/ListItem'
import Default from './Default'

const TabPane = Tabs.TabPane;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
            fullScreen: true,
            data: []
        };
        this.getData = this.getData.bind(this)
    }
    getData(type="") {
        axios.get(`/topics/${type}`)
            .then(res => {
                const data = res.data.data;
                console.log(res)
                this.setState({ "data": data });
            });
    }
    clickHandle(data) {
        this.props.history.push('/detail/' + data.id)
    }
    componentDidMount() {
        this.getData();
    }
    
    render() {
        const history = this.props.history;
        const tabs = [
            { title: "one" },
            { title: "two" },
            { title: "three" },
            { title: "four" },
        ];
        const tabss = {
            '全部': 'all',
            '精华': 'good',
            '分享': 'share',
            '问答': 'ask',
            '招聘': 'job'
        };

        const tabs2 = [
            { title: 'all', sub: '1' },
            { title: 'good', sub: '2' },
            { title: 'share', sub: '3' },
            { title: 'ask', sub: '4' },
            { title: 'job', sub: '5' }
        ];
        const ListTitStyle = {
            display: "inline-block",
            width: "70vw",
            color: "#666"
        }
        const ListTitAva = {
            display: "inline-block",
            height: "30px",
            width: "30px",
        }
        const ImgSize = {
            width: "100%"
        }
        return (
            <div>
                <Tabs tabs={tabs2}
                    initialPage={0}
                    onChange={(tab, index) => {
                        console.log('onChange', index, tab);
                        axios.get(`/topics?tab=${tab.title}`)
                            .then(res => {
                                const data = res.data.data;
                                console.log(res)
                                this.setState({ "data": data });
                            });
                    }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                {
                    
                    Object.entries(tabss).map((item) => (
                            <div tab={item[0]} key={item[1]}>
                                <List store={this.state.data} />
                            </div>
                        
                    ))
                }
                    {/* <ul>{
                            this.state.data.map((data) => {
                                return (
                                    <li key={data.id} style={{ "overflow": "hidden" }} onClick={() => { }}>
                                        <div className="List-title">
                                            <span style={ListTitStyle}>{data.title}</span>
                                            <span className="" style={ListTitAva}><img style={ImgSize} src={data.author.avatar_url} alt="" /></span>
                                        </div>
                                    </li>
                                )
                            }
                            )
                            
                        }
                        
                    </ul> */}
                    {/* {
                        Object.entries(tabs).map((item, index) =>
                            (<TabPane tab={item[0]} key={item[1]}>
                                123
                            </TabPane>))
                    } */}
                    
                </Tabs>
                <Default history={history}/>    
            </div>
        )
    }
}

export default Main;