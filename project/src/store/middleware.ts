import reducer from './reducer';
import {Middleware} from 'redux';
import browserHistory from '../services/browser-history';
import {redirectToRoute} from './action';

type Reducer = ReturnType<typeof reducer>;

export const redirect: Middleware<unknown, Reducer> =
  (_store) =>
    (next) =>
      (action) => {
        if (action.type === redirectToRoute.type) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
