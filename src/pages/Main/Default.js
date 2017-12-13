import { Tabs, WhiteSpace, Badge, TabBar } from 'antd-mobile';
import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
    BrowserHistory
} from 'react-router-dom';

import dB from './../../utils/index';
import { getDefaultProps } from '../../../node_modules/_antd-mobile@2.1.1@antd-mobile/lib/picker/AbstractPicker';

export default class Default extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.whichTab,
            hidden: false,
            fullScreen: true,
            data: []
        };
    }
    handleRouterPush(path, e) {
        console.log(this.props)
        this.props.history.push(path);
    }
    render() {
        console.log(this)
        return (
            <div>
                <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        hidden={this.state.hidden}
                    >
                        <TabBar.Item
                            title="one"
                            key="one"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                                dB.save(["whichTab"], { "whichTab": "blueTab" })
                                this.handleRouterPush('/')
                            }}
                            data-seed="logId"
                            
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="two"
                            key="two"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                                dB.save(["whichTab"], {"whichTab":"redTab"})
                                this.props.history.push("/write");
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="three"
                            key="three"
                            dot
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                                dB.save(["whichTab"], { "whichTab": "greenTab" })
                                this.handleRouterPush('/message')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="My"
                            key="my"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                                dB.save(["whichTab"], { "whichTab": "yellowTab" })
                                this.handleRouterPush('/mine')
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        )
    }
}