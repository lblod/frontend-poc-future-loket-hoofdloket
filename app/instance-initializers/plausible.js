import ENV from 'loket/config/environment';

export function initialize(application) {
  const plausible = application.lookup('service:plausible');
  const { domain, apiHost } = ENV.plausible;
  if (
    domain !== '{{ANALYTICS_APP_DOMAIN}}' &&
    apiHost !== '{{ANALYTICS_API_HOST}}'
  ) {
    plausible.enable({
      domain,
      apiHost,
    });
  }
}

export default {
  initialize,
};
