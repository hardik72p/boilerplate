import React, {
    Component
  } from 'react';
  import {
    Route,
    Switch,
    Redirect,
    withRouter
  } from 'react-router-dom';
  import {
    connect
  } from 'react-redux';
  import {
    ToastContainer
  } from 'react-toastify';
  import Login from './components/Login';
  import Loader from './common_components/Loader/Loader';
  import NotFound from './components/NotFound';
  import Dashboard from './components/Dashboard';
  import Header from './components/Header'
   
  class Routes extends Component {
    constructor(props) {
      super(props);
      this.state = {
        prevScrollpos: window.pageYOffset,
        visible: true,
      };
    }
  
    PrivateRoute = props => {
      const token = localStorage.getItem('token');
      return !token ? (
        <Redirect to="/login" />
      ): (
        <div className="margin-top">
          <Switch>
            {token && <Redirect exact from="/login" to="/dashboard" />}
            {token ? <Redirect exact from="/" to="/dashboard" /> : null}
            <Route component={Dashboard} exact path="/dashboard" />
            {/* User Routes */}
            <Route component={NotFound} />
          </Switch>
        </div>
      );
    };
  
    render() {
      const token = localStorage.getItem('token');
      return (
        <>
          <Loader />
          {token ? (
            <Header {...this.props} visible={this.state.visible} />
          ) : (
            <Redirect from="/" to="/login" />
          )}
          <ToastContainer hideProgressBar />
          <Switch>
            <Route
              exact
              path="/login"
              render={props => {
                if (!token) {
                  return <Login {...this.props} />;
                }
                return <Redirect from="/" to="/dashboard" />;
              }}
            />
            {this.PrivateRoute(this.props)}
          </Switch>
        </>
      );
    }
  }
  
  const select = store => store;
  
  export default withRouter(
    connect(
      select,
    )(Routes)
  );