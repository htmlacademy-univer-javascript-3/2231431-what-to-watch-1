import {render, screen} from '@testing-library/react';
import {getMockReviews} from '../../utils/mocks';
import FilmReviews from './film-reviews';

describe('FilmReviews', () => {
  const mockReviews = getMockReviews();

  it('should correct render', () => {
    render(
      <FilmReviews reviews={mockReviews}/>
    );

    expect(screen.getByText(/Emely/i)).toBeInTheDocument();
    expect(screen.getByText(/Mollie/i)).toBeInTheDocument();
  });
});
