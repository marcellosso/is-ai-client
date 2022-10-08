import Axios from 'axios';

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: false,
});

export default api;
