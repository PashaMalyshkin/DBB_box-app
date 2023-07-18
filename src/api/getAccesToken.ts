import { client } from '../utils/fetchClient';

const client_secret = 'aqy91zqawycph9p';
const client_id = 'k56627zrptuzaqd';
const redirect_uri = 'https://pashamalyshkin.github.io/DBB_box-app/';

const accessOptions = {
  grant_type: 'authorization_code',
  redirect_uri,
  client_id,
  client_secret,
};

export const getBearerToken = (code: string) => {
  return client.post<any>('https://api.dropbox.com/oauth2/token', `code=${code}&${Object.entries(accessOptions).map(([key, value]) => `${key}=${encodeURIComponent(value)}`).join('&')}`);
};
