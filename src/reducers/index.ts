import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import auth from './auth';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    auth,
  });
