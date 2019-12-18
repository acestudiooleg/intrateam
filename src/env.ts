import { evalObject } from './utils/eval';

export const {
  REACT_APP_ENV,
  REACT_APP_BASENAME,
  REACT_APP_LOGIN_URL,
} = evalObject(process.env);
