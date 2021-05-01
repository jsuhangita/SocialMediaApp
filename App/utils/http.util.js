import axios from 'axios';
import { SERVER_URL, endpoints } from '../configs/api.config';

const baseConfig = {
  baseURL: SERVER_URL,
  timeout: 60000, // 60 seconds. for UAT TESTING
  // withCredentials: true,
  // validateStatus: () => true,
  // cancelToken: null,
  // onDownloadProgress: () => {}, // Left this as a reference incase we need it
};

const baseHeader = {

}

export async function GET(endpoint, path = '', params,headers = {}, options = {}) {
  const config = {
    ...baseConfig,
    ...options,
    headers: {
      // ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      // ...baseHeader,
      ...headers,
    },
    params,
    method: 'get',
    endpoint,
    url: `${endpoints[endpoint]}${path}`,
  };
  return axios(config);
}
export async function POST(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const config = {
    ...baseConfig,
    headers: {
      // ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...baseHeader,
      ...headers,
    },
    ...options,
    method: 'post',
    endpoint,
    url: `/api${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}
export async function PUT(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const config = {
    ...baseConfig,
    headers: {
      // ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...baseHeader,
      ...headers,
    },
    ...options,
    method: 'put',
    endpoint,
    url: `/api${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}
export async function DELETE(endpoint, path = '', data = {}, headers = {}, options = {}) {
  const config = {
    ...baseConfig,
    headers: {
      // ...(appConfig.access_token && { Authorization: `Bearer ${appConfig.access_token}` }),
      ...baseHeader,
      ...headers,
    },
    ...options,
    method: 'delete',
    endpoint,
    url: `/api${endpoints[endpoint]}${path}`,
    data,
  };
  return axios(config);
}

export const initializeHTTPInterceptors = (store) => {
  // axios.interceptors.request.use(mockInterceptor, Promise.reject);
  // axios.interceptors.request.use(getNoNetWorkInterceptor(store), Promise.reject);
  // axios.interceptors.request.use(demoAccountInterceptor, Promise.reject); // FOR LATER
  // axios.interceptors.request.use(addDefaultPayloadInterceptor(store), Promise.reject);
  // axios.interceptors.request.use(removeFalsyValues, Promise.reject);
  // RESPONSE INTERCEPTORS
  // axios.interceptors.response.use(getStatusValidatorInterceptor(store), Promise.reject);
};
