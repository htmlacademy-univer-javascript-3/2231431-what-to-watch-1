import {getMockFilms} from '../../utils/mocks';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import createApi from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {ALL_GENRES, NameSpace} from '../../const';
import {Provider} from 'react-redux';
import GenresList from './genres-list';

jest.mock('../../services/process-error-handle.ts');
describe('GenresList', () => {
  const mockFilms = getMockFilms();
  const api = createApi();
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    StateType,
    Action,
    ThunkDispatch<StateType, typeof api, Action>
    >(middlewares);
  const store = mockStore({
    [NameSpace.Films]: {
      films: mockFilms,
      currentGenre: ALL_GENRES,
    }
  });

  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <GenresList buttonClickHandler={() => ({})} />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[0].genre)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[1].genre)).toBeInTheDocument();
  });
});
