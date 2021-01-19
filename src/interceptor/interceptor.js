import Request from 'axios';
import { ip } from '../globals/static';

export const makePublicRequest = (method, api = '/login', data) =>
  Request[method](ip + api, data).then(r => r);

export const makeGetRequest = (method, api = '/login') =>
  Request[method](ip + 'api/' + api, {
    headers: {
      'authorization': localStorage.getItem('token'),
    },
  });

export const makePostRequest = (method, api = '/login', data) =>
  Request[method](ip + 'api/' + api, data, {
    headers: {
      'authorization': localStorage.getItem('token'),
    },
  });
