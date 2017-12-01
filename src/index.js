import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/page/home/Home'
import registerServiceWorker from './registerServiceWorker';
import Store from './component/store/Store'

Store.initData();

ReactDOM.render(<Home store={Store} />, document.getElementById('root'));
registerServiceWorker();
