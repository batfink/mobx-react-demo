import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import counter from './widget5/Counter';
import { Provider } from 'mobx-react';

ReactDOM.render(
    <Provider counter={counter}>
      <App />
    </Provider>,
  document.getElementById('root')
);
