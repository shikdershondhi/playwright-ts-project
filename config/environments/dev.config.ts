// dev.config.ts
import { baseConfig } from './base.config';

export const devConfig = {
  ...baseConfig,
  baseURL: 'https://dev.example.com',
  apiURL: 'https://api.dev.example.com',
  timeouts: {
    ...baseConfig.timeouts,
    short: 3000,
  },
  auth: {
    ...baseConfig.auth,
  }
};