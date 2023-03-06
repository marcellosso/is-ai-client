import Axios from 'axios';

const api = Axios.create({
  baseURL: '/api/',
  withCredentials: false,
});

export default api;
