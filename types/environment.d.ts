import { baseConfig } from '../config/environments/base.config';

declare global {
  type EnvironmentConfig = typeof baseConfig;
  type EnvironmentType = 'dev' | 'staging' | 'prod';
  
  namespace NodeJS {
    interface ProcessEnv {
      ENV?: EnvironmentType;
      BASE_URL?: string;
      API_URL?: string;
      // Add other expected env vars
    }
  }
}

export {};