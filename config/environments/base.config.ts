interface EnvironmentConfig {
  baseURL: string;
  apiURL: string;
  auth: {
    admin: UserCredentials;
    standard: UserCredentials;
  };
  timeouts: {
    short: number;
    medium: number;
    long: number;
  };
}

interface UserCredentials {
  username: string;
  password: string;
}

export const baseConfig: EnvironmentConfig = {
  baseURL: 'https://nsdev24.neustring.com',
  apiURL: 'https://nsdev24.neustring.com/accounts/login/',
  auth: {
    admin: {
      username: 'shikder',
      password: 'Asdasd123@',
    },
    standard: {
      username: 'shikder_user',
      password: 'Asdasd123@',
    },
  },
  timeouts: {
    short: 5000,
    medium: 15000,
    long: 30000,
  },
};