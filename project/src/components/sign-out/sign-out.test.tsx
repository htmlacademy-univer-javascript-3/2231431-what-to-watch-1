import {render, screen} from '@testing-library/react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignOut from './sign-out';
import {Provider} from 'react-redux';
import {getMockUser} from '../../utils/mocks';
import createApi from '../../services/api';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {StateType} from '../../types/state-type';
import {Action} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import userEvent from '@testing-library/user-event';
import {logout} from '../../store/action';


jest.mock('../../services/process-error-handle.ts');
const mockUser = getMockUser();
const api = createApi();
const middlewares = [thunk.withExtraArgument(api)];
const mockStore = configureMockStore<
  StateType,
  Action
  >(middlewares);
const store = mockStore({
  [NameSpace.User]: {
    user: mockUser,
  }
});

describe('SignOut', () => {
  it('should correct render', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SignOut/>
        </BrowserRouter>
      </Provider>);

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should dispatch logout when click by button', async () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path={'*'} element={<SignOut/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    );

    await userEvent.click(screen.getByRole('button'));

    expect(store.getActions().map(({type}) => type)).toEqual([
      logout.pending.type,
    ]);
  });
});
