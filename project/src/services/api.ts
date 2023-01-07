import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://10.react.pages.academy/wtw';
const TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT
  });

  return api;
};

export default createApi;
