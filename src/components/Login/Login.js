import React, {Component, useState } from 'react';
import { isEmpty, get } from 'lodash';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  toastError,
  toastSuccess,
} from '../../common_components/ToastContainer';
import { ValidationProcessor } from '../../globals/utils';
import LoaderConnect from '../../common_components/loader';

class Login extends Component{
  constructor(props){
    super(props)
    this.state={
      email:"",
      error:{}
    }
  }

  validations = () => [
    {
      name: 'email',
      value: this.state.email,
      isRequired: true,
      reqType: 'email',
    },
    {
      name: 'password',
      value: this.state.password,
      isRequired: true,
    },
  ];

  onSubmit = e => {
    const { setPageLoading, login, history, forgotPassword } = this.props;
    const {email,password}=this.state
    e.preventDefault();
    const validation = ValidationProcessor(this.validations());
    this.setState({error:validation.errors})
    // setError(validation.errors);
    const emailLowerCase = email.toLowerCase();
    if (validation.isValid) {
      setPageLoading(true);
      login({ email: emailLowerCase, password })
        .then(response => {
          setPageLoading(false);

          const { token, personData } = response.data;
          localStorage.setItem('token', token);
          history.push('/dashboard');
          toastSuccess('Successfully Logged In');
        })
        .catch(err => {
          setPageLoading(false);
          toastError(err.data.errorMessage);
        });
    }
  };

  render(){
    return(
      <div className="d-flex justify-content-center align-items-center login-sec">
        <div className="login-primary w-100 mx-auto text-center">
          <div className="fs-22 text-center mb-4 text-white">Login</div>
        <form onSubmit={(e)=>{
          this.onSubmit(e)
        }}>
          <div className="form-group">
        <input 
        className="form-control"
        placeholder="Email id*"
        onChange={(e)=>{
          this.setState({email:e.target.value})
        }}
        ></input>
        <span className="text-danger">{this.state.error.email}</span>
        </div>
        <div className="form-group">
         <input 
         type="password"
         className="form-control"
        placeholder="Password*"
        onChange={(e)=>{
          this.setState({password:e.target.value})
        }}
        ></input>
        <span className="text-danger">{this.state.error.password}</span>
        </div>
        <button type="submit" className="btn btn-secondary w-100">
          Login
        </button>
        </form>
        </div>
      </div>
    )
  }
} 

Login.propTypes = {
  setPageLoading: PropTypes.func.isRequired,
};
export default LoaderConnect(Login);
