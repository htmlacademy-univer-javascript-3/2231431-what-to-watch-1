import { getMockFilms} from '../../utils/mocks';
import createApi from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import MyListScreen from './my-list-screen';

jest.mock('../../services/process-error-handle.ts');
const mockFilms = getMockFilms();
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
  [NameSpace.Films]: {
    favoriteFilms: mockFilms,
  }
});

describe('MyListScrees', () => {
  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyListScreen/>
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/My list/i)).toBeInTheDocument();
  });

  it('should correct render film cards', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MyListScreen/>
        </BrowserRouter>
      </Provider>
    );

    const filmCards = screen.getAllByTestId('card-link');
    expect(filmCards.length).toBe(mockFilms.length);


    expect(screen.getByText(mockFilms[0].name)).toBeInTheDocument();
  });
});
