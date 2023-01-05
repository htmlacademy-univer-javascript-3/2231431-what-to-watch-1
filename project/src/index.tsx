import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import FILMS from './mocks/films';
import REVIEWS from './mocks/reviews';
import {Provider} from 'react-redux';
import store from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App films={FILMS} reviews={REVIEWS}/>
    </Provider>
  </React.StrictMode>,
);
