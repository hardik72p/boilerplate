import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import Routes from './routes';
import './index.scss';
import 'react-toastify/dist/ReactToastify.css'; // React-tostify package css

const globalStore = store({});
const history = syncHistoryWithStore(createBrowserHistory(), globalStore);

ReactDOM.render(
  <Provider store={globalStore}>
    <Router history={history}>
      <Route component={Routes} path="/" />
    </Router>
  </Provider>,
  document.getElementById('root')
);
