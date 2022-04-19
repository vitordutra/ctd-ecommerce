import axios from 'axios';
import { errorNotification } from '../utils/notifications';

axios.defaults.baseURL = 'http://localhost:8080';

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    errorNotification('Houve um erro inesperado.', '', 'bottomLeft');
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
