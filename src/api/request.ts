import axios, { Method, AxiosResponse, AxiosError } from 'axios';
import { baseUrl } from '../config';

const request = async <T>(method: Method, url: string, body: T): Promise<T> => {
  const token = localStorage.getItem('token');

  // Axios initialization with default config
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${token ?? ''}`,
    },
    withCredentials: token !== null,
  });

  return await new Promise((resolve, reject) => {
    api
      .request({
        method,
        url,
        data: body,
      })
      .then((response: AxiosResponse<T>) => {
        resolve(response.data);
      })
      .catch((err: AxiosError<T>) => {
        // If user is not authenticated, then redirect to login page
        if (err?.response?.status === 403) {
          localStorage.removeItem('token');
          location.pathname = '/login';
        } else {
          // eslint-disable-next-line no-console
          console.log('API Error --------> ', err?.response);
          reject(err);
        }
      });
  });
};

// Export
export default request;
