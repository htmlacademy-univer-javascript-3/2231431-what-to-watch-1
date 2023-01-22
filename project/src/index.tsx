import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthorizationStatus, loadFilms, loadPromoFilm} from './store/action';
import ErrorMessage from './components/error-message/error-message';
import HistoryRouter from './components/history-route/history-route';
import browserHistory from './services/browser-history';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(loadFilms());
store.dispatch(loadPromoFilm());
store.dispatch(checkAuthorizationStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage />
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);
