import {getMockFilm, getMockFilms, getMockReviews} from '../../utils/mocks';
import createApi from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {fireEvent, render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import PlayerScreen from './player-screen';

jest.mock('../../services/process-error-handle.ts');
const mockFilm = getMockFilm();
const mockFilms = getMockFilms();
const mockReviews = getMockReviews();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  StateType,
  Action,
  ThunkDispatch<StateType, typeof api, Action>
  >(middlewares);
const store = mockStore({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.Auth,
  },
  [NameSpace.Film]: {
    currentFilm: mockFilm,
    similarFilms: mockFilms,
    reviews: mockReviews,
  },
  [NameSpace.Films]: {
    favoriteFilms: mockFilms,
  }
});

describe('PlayerScreen', () => {
  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <PlayerScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText('Transpotting')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toBeInTheDocument();
  });

  it('should start play by click', async () => {
    window.HTMLMediaElement.prototype.play = jest.fn();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <PlayerScreen />
        </BrowserRouter>
      </Provider>
    );

    fireEvent.click(screen.getByTestId('play-button'));
    expect(window.HTMLMediaElement.prototype.play).toBeCalled();
  });
});
