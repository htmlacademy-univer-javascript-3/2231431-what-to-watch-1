import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import HistoryRouter from '../history-route/history-route';
import {Route, Routes } from 'react-router-dom';
import Logo from './logo';
import { AppRoute } from '../../const';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();
history.push('/logo');

describe('Logo', () => {
  it('should redirect to MainScreen when click by Link', async () => {
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path={'/logo'} element={<Logo />}/>
          <Route path={AppRoute.Main} element={<p>MainScreen</p>} />
        </Routes>
      </HistoryRouter>
    );

    await userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/MainScreen/i)).toBeInTheDocument();
  });
});
