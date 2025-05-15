import { defineConfig } from '@playwright/test';
import { envManager } from '../utils/environment';

const config = envManager.getConfig();

export default defineConfig({
  globalSetup: require.resolve('./global-setup'),
  globalTeardown: require.resolve('./global-teardown'),
  timeout: config.timeouts.long,
  expect: {
    timeout: config.timeouts.short,
  },
});