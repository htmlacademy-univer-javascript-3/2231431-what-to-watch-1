import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import FilmType from '../types/film-type';
import {AppDispatch, StateType} from '../types/state-type';
import {AxiosInstance} from 'axios';
import {ApiRoute, AppRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR} from '../const';
import AuthorizationData from '../types/authorization-data-type';
import UserType from '../types/user-type';
import {dropToken, saveToken} from '../services/token';

export const changeGenre = createAction<{newGenre: string}>('changeGenre');
export const filterFilmsByCurrentGenre = createAction('filterFilmsByCurrentGenre');
export const fillFilms = createAction<FilmType[]>('fillFilms');
export const setDataLoading = createAction<boolean>('setDataLoading');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const setUser = createAction<UserType|undefined>('setUser');
export const redirectToRoute = createAction<AppRoute | string>('redirectToRoute');
export const setError = createAction<string | null>('setError');

export const loadFilm = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType,
  extra: AxiosInstance
}>(
  'loadFilm',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoading(true));
    const {data} = await api.get<FilmType[]>(ApiRoute.Films);
    dispatch(fillFilms(data));
    dispatch(setDataLoading(false));
  }
);

export const checkAuthorizationStatus = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType,
  extra: AxiosInstance
}>(
  'checkAuthorizationStatus',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(ApiRoute.Login);
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }

  }
);

export const login = createAsyncThunk<void, AuthorizationData, {
  dispatch: AppDispatch;
  state: StateType,
  extra: AxiosInstance
}>(
  'login',
  async (authorizationData, {dispatch, extra: api}) => {
    const {data} = await api.post<UserType>(ApiRoute.Login, authorizationData);
    saveToken(data.token);
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(setUser(data));
    dispatch(redirectToRoute(AppRoute.Main));
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType,
  extra: AxiosInstance
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ApiRoute.Logout);
    dropToken();
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setUser(undefined));
  }
);

export const clearError = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: StateType;
  extra: AxiosInstance
}>('clearError', async (_arg, { dispatch }) => {
  setTimeout(() => {
    dispatch(setError(null));
  }, TIMEOUT_SHOW_ERROR);
});
