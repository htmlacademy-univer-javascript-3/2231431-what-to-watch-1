import {render, screen} from '@testing-library/react';
import ShowMoreButton from './show-more-button';

describe('ShowMoreButton', () => {
  it('should correct render', () => {
    render(<ShowMoreButton buttonClickHandler={() => ({})}/>);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });
});
