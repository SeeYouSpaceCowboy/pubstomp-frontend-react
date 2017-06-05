import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './containers/App';
import './style.css';
import './styles.min.css';

const store = createStore( rootReducer, applyMiddleware( reduxThunk ) );

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  store.dispatch({ type: "ADD_AUTH" });
}

//the below function is required for material-ui to listen to click events
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
