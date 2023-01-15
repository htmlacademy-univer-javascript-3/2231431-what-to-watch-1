import {render, screen} from '@testing-library/react';
import NotFoundScreen from './not-found-screen';
import {BrowserRouter} from 'react-router-dom';

describe('NotFoundScreen', () => {
  it('should correct render', () => {
    render(
      <BrowserRouter>
        <NotFoundScreen />
      </BrowserRouter>
    );

    expect(screen.getByText('Ошибка 404. Страница не существует.')).toBeInTheDocument();
    expect(screen.getByText('На главную страницу')).toBeInTheDocument();
  });
});
