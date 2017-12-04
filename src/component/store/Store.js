import React, { Component } from 'react';
import { observable, action, useStrict, runInAction } from 'mobx';
import { observer } from 'mobx-react';
import axios from './../axios/index';

useStrict(true)
class Store {
    @observable data = null;
    @action initData = async () => {
        const { data } = await axios.get('/topics?tab=ask&limit=40&page=1')
        runInAction(() => {
            this.data = data.data;
            console.log(this.data);
            console.log("api获取数据更新data")
        });
    }
}

export default new Store();