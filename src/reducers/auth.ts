import { createReducer } from 'redux-create-reducer';
import { CHANGE_NAME, AUTHORIZE, LOGIN } from '../actions/auth';
import { get } from 'lodash';

export interface IUser {
  name: string;
  lastname: string;
}

export interface IAuthState {
  isLoading: boolean;
  error: any;
  user: IUser;
}

const initialState = {
  isLoading: false,
  error: null,
  user: {
    name: null,
    lastname: null,
  },
};

export const getUser = (state): IUser =>
  get(state, 'auth.user', initialState.user);

export default createReducer(initialState, {
  [LOGIN]: state => ({
    ...state,
    isLoading: true,
  }),
  [AUTHORIZE]: (state, action) => ({
    ...state,
    isLoading: false,
    user: action.payload,
  }),
  [CHANGE_NAME]: (state, action) => ({
    ...state,
    user: { ...state.user, name: action.payload },
  }),
});
