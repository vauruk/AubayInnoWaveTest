import axios, {AxiosRequestConfig} from 'axios';
import {IHttpClientRequestParameters} from './types';
import {Config} from '../config';
import consoleDebug from '../util/debugMode';

consoleDebug('API URL:', Config.ApiURL);
const optionsAuth = (token: string): AxiosRequestConfig => {
  return {
    baseURL: Config.ApiAuthURL,
    timeout: 30000,
    headers: {
      responseType: 'json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };
};
const optionsNoAuth = (): AxiosRequestConfig => {
  return {
    baseURL: Config.ApiURL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
/**
 * @author Vanderson de Moura Vauruk
 *
 */
export default class HttpClient {
  static post<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
    return new Promise<U>((resolve, reject) => {
      const {path, payload, token} = parameters;
      consoleDebug('POST', path, payload, token);
      const options: AxiosRequestConfig = token
        ? optionsAuth(token)
        : optionsNoAuth();

      axios
        .post(path, payload, options)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => reject(error));
    });
  }

  static get<T>(parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const {path, token} = parameters;
      const options: AxiosRequestConfig = token
        ? optionsAuth(token)
        : optionsNoAuth();

      axios
        .get(path, options)
        .then(res => {
          resolve(res.data);
        })
        .catch((err: any) => {
          if (err.response) {
            // The client was given an error response (5xx, 4xx)
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
          } else if (err.request) {
            console.log(err.request);
            // The client never received a response, and the request was never left
          } else {
            // Anything else
          }
          reject(err);
        });
    });
  }
  static put<T, U>(parameters: IHttpClientRequestParameters<T>): Promise<U> {
    return new Promise<U>((resolve, reject) => {
      const {path, token} = parameters;
      const options: AxiosRequestConfig = token
        ? optionsAuth(token)
        : optionsNoAuth();
      axios
        .put(path, options)
        .then((response: any) => {
          resolve(response.data);
        })
        .catch((error: any) => reject(error));
    });
  }
}
