import { makePublicRequest } from '../interceptor/interceptor';
import { SET_PATHNAME, PREV_CLIENT, SET_NAVBAR } from './actionTypes';

/** ************ sync actions START ************* */
export const set_pathName = payload => ({ type: SET_PATHNAME, payload });
export const set_navbar = payload => ({ type: SET_NAVBAR, payload });
// const previousClient = payload => ({ type: PREV_CLIENT, payload });

/** ************ sync actions END ************* */

/** ************ async actions START************* */
export const forgotPassword = data => dispatch =>
  makePublicRequest('post', 'pub/resetPassword', data)
    .then(response => {
      // dispatch(previousClient(response.data));
      return response.data;
    })
    .catch(err => Promise.reject(err.response));

export const login = data => dispatch =>
  makePublicRequest('post', 'pub/login', data)
    .then(response => {
      // dispatch(previousClient(response.data));
      return response.data;
    })
    .catch(err => Promise.reject(err.response));

export const countryList = () => () =>
  makePublicRequest('get', 'pub/country')
    .then(response => response.data)
    .catch(err => Promise.reject(err.response));

export const stateList = data => () =>
  makePublicRequest('get', `pub/states/${data}`, data)
    .then(response => response.data)
    .catch(err => Promise.reject(err));

/** ************ async actions END************* */
