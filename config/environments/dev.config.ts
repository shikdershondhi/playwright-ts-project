import { baseConfig } from './base.config';

export const devConfig = {
  ...baseConfig,
  baseURL: 'https://prod.example.com',
  apiURL: 'https://api.example.com',
  timeouts: {
    ...baseConfig.timeouts,
    short: 3000, // Prod can handle faster timeouts
  },
};