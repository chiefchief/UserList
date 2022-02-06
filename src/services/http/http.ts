import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const defHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'app-id': '61fe6a0d4e60a40af3607457',
};

const instance: AxiosInstance = axios.create({
  baseURL: 'https://dummyapi.io/data/v1',
  timeout: 24000,
  timeoutErrorMessage: 'Timeout!!',
  headers: defHeaders,
});

const get = <T, D = any>(url: string, config?: AxiosRequestConfig<D>) => instance.get<T>(url, config);
const post = <T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>) => instance.post<T>(url, data, config);

export const httpService = {
  get,
  post,
};
