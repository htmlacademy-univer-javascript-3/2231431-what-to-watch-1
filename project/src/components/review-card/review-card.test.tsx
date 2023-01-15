import {render, screen} from '@testing-library/react';
import {getMockReview} from '../../utils/mocks';
import ReviewCard from './review-card';

describe('ReviewCard', () => {
  const mockReview = getMockReview();

  it('should correct render', () => {
    render(
      <ReviewCard review={mockReview}/>
    );

    expect(screen.getByText(/Emely/i)).toBeInTheDocument();
    expect(screen.getByText(/I personally found this movie to be boring. Definitely one of the most boring movies I've ever seen./i)).toBeInTheDocument();
  });
});
