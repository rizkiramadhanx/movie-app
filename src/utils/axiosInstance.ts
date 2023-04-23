import axios from 'axios';

const AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '18b6731469f5659d8587dfec39aaf31a',
  },
});

export default AxiosInstance;
