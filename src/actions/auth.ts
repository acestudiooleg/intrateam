import { createAction, createEmptyAction } from '../utils/actions';
export const LOGIN = 'AUTH/LOGIN';
export const AUTHORIZE = 'AUTH/AUTHORIZE';
export const CHANGE_NAME = 'AUTH/CHANGE_NAME';
export const GO_TO_LOGIN = 'AUTH/GO_TO_LOGIN';

export const types = {
  CHANGE_NAME,
  AUTHORIZE,
  LOGIN,
};

export const login = createEmptyAction(LOGIN);
export const goToLogin = createEmptyAction(GO_TO_LOGIN);
export const authorize = createAction(AUTHORIZE);
export const changeName = createAction(CHANGE_NAME);

export default {
  goToLogin,
  login,
  authorize,
  changeName,
};
