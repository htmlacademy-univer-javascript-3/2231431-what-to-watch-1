import {getMockFilm, getMockReviews} from '../../utils/mocks';
import {fireEvent, render, screen} from '@testing-library/react';
import Tabs from './tabs';


describe('Tabs', () => {
  const mockFilm = getMockFilm();
  const mockReviews = getMockReviews();
  it('should correct render OverviewTab', () => {
    render(<Tabs film={mockFilm} reviews={mockReviews} />);

    expect(screen.getByText(mockFilm.description)).toBeInTheDocument();
  });

  it('should correct render DetailsTab', () => {
    render(<Tabs film={mockFilm} reviews={mockReviews} />);
    fireEvent.click(screen.getByTestId('details-tab'));

    expect(screen.getByText(mockFilm.director)).toBeInTheDocument();
  });

  it('should correct render ReviewsTab', () => {
    render(<Tabs film={mockFilm} reviews={mockReviews} />);
    fireEvent.click(screen.getByTestId('reviews-tab'));

    expect(screen.getByText(mockReviews[0].user.name)).toBeInTheDocument();
    expect(screen.getByText(mockReviews[0].comment)).toBeInTheDocument();
  });
});
