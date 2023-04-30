import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './reduxnew/store/index';




// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  
    <React.StrictMode>
    <App/>
    </React.StrictMode>
    
,document.getElementById('root'));

registerServiceWorker();

