import {store} from '../store';
import {AuthorizationStatus} from '../const';
import UserType from './user-type';
import FilmType from './film-type';
import ReviewType from './review-type';


export type StateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  user?: UserType,
  isAuthorizationInProgress: boolean,
};

export type FilmsProcess = {
  films: FilmType[],
  favoriteFilms: FilmType[],
  currentGenre: string,
  isFilmsLoading: boolean,
  isFavoriteFilmsLoading: boolean,
};

export type FilmProcess = {
  isFilmLoading: boolean,
  isReviewsLoading: boolean,
  isSimilarFilmsLoading: boolean,
  currentFilm: FilmType | null,
  reviews: ReviewType[],
  similarFilms: FilmType[],
  promoFilm: FilmType | null,
};

export type ErrorProcess = {
  error: string | null,
}
