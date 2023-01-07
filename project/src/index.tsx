import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import REVIEWS from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {loadFilm} from './store/action';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

store.dispatch(loadFilm());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={REVIEWS}/>
    </Provider>
  </React.StrictMode>,
);
