import {render, screen} from '@testing-library/react';
import SignIn from './sign-in';
import {BrowserRouter} from 'react-router-dom';

describe('SignIn', () => {
  it('should correct render', () => {
    render(
      <BrowserRouter>
        <SignIn/>
      </BrowserRouter>);

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument();
  });
});
