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