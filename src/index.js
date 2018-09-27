import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Store } from './model';

const store = Store.create({});

ReactDOM.render(<App data={store} />, document.getElementById('root'));
registerServiceWorker();
