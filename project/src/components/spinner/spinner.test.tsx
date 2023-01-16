import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import Spinner from './spinner';

describe('Spinner', () => {
  it('should correct render', () => {
    render(
      <BrowserRouter>
        <Spinner/>
      </BrowserRouter>);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
