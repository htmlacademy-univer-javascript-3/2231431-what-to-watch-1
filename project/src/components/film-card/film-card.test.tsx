import {getMockFilm} from '../../utils/mocks';
import {fireEvent, render, screen} from '@testing-library/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FilmCard from './film-card';
import createApi from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {AppRoute, AuthorizationStatus, NameSpace} from '../../const';
import {Provider} from 'react-redux';
import FilmPageScreen from '../../pages/film-page-screen/film-page-screen';

jest.mock('../../services/process-error-handle.ts');
describe('filmCard', () => {
  const mockFilm = getMockFilm();
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    StateType,
    Action,
    ThunkDispatch<StateType, typeof api, Action>
    >(middlewares);
  const store = mockStore({
    [NameSpace.Film]: {
      isFilmLoading: false,
      isSimilarFilmsLoading: false,
      isReviewsLoading: false,
      currentFilm: mockFilm,
      similarFilms: [],
      reviews: [],
    },
    [NameSpace.User]: {
      authorizationStatus: AuthorizationStatus.NoAuth,
    },
    [NameSpace.Films]: {
      favoriteFilms: [],
    }
  });

  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <FilmCard film={mockFilm} setActiveFilmCard={() => ({})} isActive={false} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
  });

  it('should redirect to filmPage by click', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Film} element={<FilmPageScreen />}/>
            <Route path='*' element={<FilmCard film={mockFilm} setActiveFilmCard={() => ({})} isActive={false} />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    const LinkToFilmPageScreen = screen.getByTestId('card-link');
    fireEvent.click(LinkToFilmPageScreen);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });
});
