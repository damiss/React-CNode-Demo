import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './component/page/home/Home'
import registerServiceWorker from './registerServiceWorker';
import Store from './component/store/Store';
import Tab from './component/page/component/Tab';
import Main from './pages/Main/index'
import Demo from './components/List/List'
import Routes from './routes/Routes';


ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
