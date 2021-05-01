import env from './env.config';

export const {
  URL: SERVER_URL,
} = env;
export const endpoints = {
  LATEST: '/latest',
  SYMBOLS:'/symbols',
};

export const mockResponses = env.fixtures || {};
