import {getMockFilm} from '../../utils/mocks';
import createApi from '../../services/api';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from '../../const';
import {render, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import AddReviewScreen from './add-review-screen';

jest.mock('../../services/process-error-handle.ts');
const mockFilm = getMockFilm();
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
  }
});

describe('AddReviewScreen', () => {
  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AddReviewScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText(/Add review/i)).toBeInTheDocument();
    expect(screen.getByText(/Post/i)).toBeInTheDocument();
  });
});
