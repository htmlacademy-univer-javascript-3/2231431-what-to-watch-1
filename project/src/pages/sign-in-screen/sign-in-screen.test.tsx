import {configureMockStore} from '@jedmao/redux-mock-store';
import { render, screen } from '@testing-library/react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import SignInScreen from './sign-in-screen';
import userEvent from '@testing-library/user-event';
import {AuthorizationStatus, NameSpace } from '../../const';

describe('SignInScreen', () => {
  const mockStore = configureMockStore();
  it('should correct render', async () => {
    render(
      <Provider store={mockStore({[NameSpace.User]: {authorizationStatus: AuthorizationStatus.NoAuth}})}>
        <BrowserRouter>
          <SignInScreen />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();

    await userEvent.type(screen.getByTestId('password-input'), '123Test');
    await userEvent.type(screen.getByTestId('email-input'), 'test@test.ru');

    expect(screen.getByDisplayValue(/123Test/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/test@test.ru/i)).toBeInTheDocument();
  });
});
