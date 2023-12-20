import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const apiInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


export type BodyType<Data> = Data;
export type ErrorType<Error> = AxiosError<Error>;

export const createInstance = <T>(
  config: AxiosRequestConfig,
  options?: AxiosRequestConfig,
): Promise<T> => {
  return apiInstance({ ...config, ...options }).then((response) => {
    return response.data;
  })
};
