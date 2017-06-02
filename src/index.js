import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';


import App from './containers/App';
import './style.css';
import './styles.min.css';

const store = createStore( rootReducer, applyMiddleware( reduxThunk ) );

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
