import dotenv from 'dotenv';
import path from 'path';
import { baseConfig } from '../config/environments/base.config';
import { devConfig } from '../config/environments/dev.config';
import { stagingConfig } from '../config/environments/staging.config';
import { prodConfig } from '../config/environments/prod.config';

type Environment = 'dev' | 'staging' | 'prod';

class EnvironmentManager {
  private static instance: EnvironmentManager;
  private config!: typeof baseConfig;

  private constructor() {
    this.loadEnvironment();
  }

  public static getInstance(): EnvironmentManager {
    if (!EnvironmentManager.instance) {
      EnvironmentManager.instance = new EnvironmentManager();
    }
    return EnvironmentManager.instance;
  }

  private getEnvironment(): Environment {
    return (process.env.ENV as Environment) || 'dev';
  }

  private loadEnvironment(): void {
    const env = this.getEnvironment();
    const envPath = path.join(__dirname, '..', '.env', `.env.${env}`);
    dotenv.config({ path: envPath });

    switch (env) {
      case 'dev':
        this.config = { ...baseConfig, ...devConfig };
        break;
      case 'staging':
        this.config = { ...baseConfig, ...stagingConfig };
        break;
      case 'prod':
        this.config = { ...baseConfig, ...prodConfig };
        break;
      default:
        this.config = baseConfig;
    }
  }

  public getConfig(): typeof baseConfig {
    return this.config;
  }

  public getCurrentEnv(): Environment {
    return this.getEnvironment();
  }
}

export const envManager = EnvironmentManager.getInstance();
export const currentEnv = envManager.getConfig();

export function getEnvironmentConfig(env?: Environment) {
  console.log(`[DEBUG] Requested env: ${env}, Process ENV: ${process.env.ENV}`);
  const environment = env || (process.env.ENV as Environment) || 'dev';
  console.log(`[DEBUG] Using environment: ${environment}`);
  
  const envPath = path.join(__dirname, '..', '.env', `.env.${environment}`);
  dotenv.config({ path: envPath });

  switch (environment) {
    case 'dev':
      console.log('[DEBUG] Loading dev config');
      return { ...baseConfig, ...devConfig };
    case 'staging':
      console.log('[DEBUG] Loading staging config');
      return { ...baseConfig, ...stagingConfig };
    case 'prod':
      console.log('[DEBUG] Loading prod config');
      return { ...baseConfig, ...prodConfig };
    default:
      console.log('[DEBUG] Loading base config');
      return baseConfig;
  }
}