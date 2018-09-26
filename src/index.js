import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Store } from './model';

const store = Store.create({
  list: [
    {
      title: 'ant',
      url:
        'https://cdn.pixabay.com/photo/2018/09/10/13/08/black-ant-3667014_640.jpg'
    }
  ]
});

ReactDOM.render(<App data={store} />, document.getElementById('root'));
registerServiceWorker();
