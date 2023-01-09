import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import REVIEWS from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthorizationStatus, loadFilm} from './store/action';
import ErrorMessage from './components/error-message/error-message';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(loadFilm());
store.dispatch(checkAuthorizationStatus());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={REVIEWS}/>
    </Provider>
  </React.StrictMode>,
);
