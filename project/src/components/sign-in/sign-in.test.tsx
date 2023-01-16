import {render, screen} from '@testing-library/react';
import SignIn from './sign-in';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import HistoryRouter from '../history-route/history-route';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';

const history = createMemoryHistory();
history.push('/singIn');

describe('SignIn', () => {
  it('should correct render', () => {
    render(
      <BrowserRouter>
        <SignIn/>
      </BrowserRouter>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });

  it('should redirect to AppRoute.SignIn when click by Link', async () => {
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path={'/singIn'} element={<SignIn/>}/>
          <Route path={AppRoute.SignIn} element={<p>SignInScreen</p>} />
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/SignInScreen/i)).toBeInTheDocument();
  });
});
