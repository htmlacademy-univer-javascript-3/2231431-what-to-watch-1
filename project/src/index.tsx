import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Setting = {
  NAME_FILM: 'The Grand Budapest Hotel',
  GENRE_FILM: 'Drama',
  RELEASE_YEAR_FILM: 2014
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App nameFilm={Setting.NAME_FILM} genreFilm={Setting.GENRE_FILM} releaseYearFilm={Setting.RELEASE_YEAR_FILM}/>
  </React.StrictMode>,
);
