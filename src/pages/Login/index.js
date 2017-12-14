import React, { Component } from 'react';
import { InputItem, Button, Flex, Card, Icon } from 'antd-mobile';
import axios from './../../axios/index';
import Default from './../Main/Default';
import dB from './../../utils/index'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            canSub: true,
            submitting: false,
            value: ''
        }
    }
    goBack = () => {
        this.props.history.push('/');
    }
    handleLogin() {
        axios.post(`/accesstoken`, { accesstoken: this.state.value})
            .then(res => {
                console.log(res)
                if(res.status == "200"){
                    dB.save(["success_token"], { "success_token": this.state.value});
                    dB.save(["avatar_url", "id", "loginname"], { "avatar_url": res.data.avatar_url, "id": res.data.id, "loginname": res.data.loginname })
                }
                if (dB.get("whichTab") == "redTab") {
                    console.log(123)
                    this.props.history.push('/write');
                }else {
                    console.log(222)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    render() {
        const history = this.props.history;
        return (
            <Card direction="column" style={{ height: '100%', width: '100%' }}>
                <Flex direction="column" style={{ padding: '0.5rem 0' }}>
                    <span>登录</span>
                    <input type="text" style={{ width: '95%', padding: '0.5rem 0 0 0' }} placeholder="请输入access_token" value={this.state.value} onChange={this.handleChange.bind(this)} />
                    <Button
                        type="primary"
                        style={{ width: '95%', marginTop: '0.5rem' }}
                        onClick={this.handleLogin.bind(this)}
                    >
                        { !this.state.submitting ? '确定' : '提交中...'}
                    </Button>
                    <Icon type="cross-circle-o" disabled style={{ marginTop: '0.5rem', height: '66px', width: "66px" }} onClick={this.goBack}/>
                </Flex>
            </Card>
        )
    }
}