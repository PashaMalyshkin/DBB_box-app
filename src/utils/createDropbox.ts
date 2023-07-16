import { Dropbox } from 'dropbox';

const token = process.env.REACT_APP_ACCESS_TOKEN;

export const dropbox = new Dropbox({
  accessToken: token,
});
