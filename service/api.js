import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6033de81843b150017931c55.mockapi.io',
});

export default api;
