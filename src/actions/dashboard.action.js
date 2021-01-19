
import { makeGetRequest,makePostRequest } from '../interceptor/interceptor';

export const getUsers = data => dispatch =>
makeGetRequest('get', 'getAllUsers', data)
    .then(response => {
      // dispatch(previousClient(response.data));
      return response.data;
    })
    .catch(err => Promise.reject(err.response));

export const getBookings = data => dispatch =>
    makeGetRequest('get', 'getBookingsOfAllUser', data)
        .then(response => {
          // dispatch(previousClient(response.data));
          return response.data;
        })
        .catch(err => Promise.reject(err.response));

export const getBookingDetails=data=>dispatch=>
    makePostRequest('post', 'getAllBookingDetailsById', data)
      .then(response => {
      // dispatch(previousClient(response.data));
      return response.data;
     })
     .catch(err => Promise.reject(err.response));
