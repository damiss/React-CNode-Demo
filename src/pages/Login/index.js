import React, { Component } from 'react';
import { InputItem, Button, Flex, Card, Icon } from 'antd-mobile';
import axios from './../../axios/index';
import Default from './../Main/Default';

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
        axios.post(`/accesstoken`, { accesstoken: "2ff3f772-f90d-4c02-8279-70ea42be59eb"})
            .then(res => {
                console.log(res)
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
                    <InputItem style={{ width: '95%', padding: '0.5rem 0 0 0' }} placeholder="请输入access_token" value={this.state.value} onChange={this.handleChange.bind(this)} />
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