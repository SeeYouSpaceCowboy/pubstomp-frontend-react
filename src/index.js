import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Navbar from './containers/Navbar';
import App from './containers/App';
import SignUp from './containers/SignUp';
import Login from './containers/Login';
import Feed from './containers/Feed';

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
      <Router >
        <div>
          <Navbar />
          <Route strict path="/" component={App} />
            <Switch>
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/feed" component={Feed}/>
            </Switch>
        </div>
    </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
