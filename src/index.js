import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/page/home/Home'
import registerServiceWorker from './registerServiceWorker';
import Store from './component/store/Store';
import Tab from './component/page/component/Tab';
import './style/style.css'


ReactDOM.render(<Tab />, document.getElementById('root'));
registerServiceWorker();
