import * as Sentry from 'sentry-expo';
import Constants from 'expo-constants';
import env from './env';

Sentry.init({
  dsn: env.sentryDns,
  enableInExpoDevelopment: !__DEV__,
  debug: !__DEV__,
});

Sentry.setRelease(Constants.installationId);
