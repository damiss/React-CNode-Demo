import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './component/topics/index';
import axios from './component/axios/index'


class App extends Component {
  componentDidMount() {
    // console.log(Topics.getData())
  }
  render() {
    return (
      <div className="App">
        <div>
          {/* {console.log(data)} */}
          123
        </div>
      </div>
    );
  }
}

export default App;
