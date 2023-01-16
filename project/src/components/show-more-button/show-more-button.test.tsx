import {render, screen} from '@testing-library/react';
import ShowMoreButton from './show-more-button';
import userEvent from '@testing-library/user-event';

describe('ShowMoreButton', () => {
  it('should correct render', () => {
    render(<ShowMoreButton buttonClickHandler={() => ({})}/>);

    expect(screen.getByText(/Show more/i)).toBeInTheDocument();
  });

  it('should call handler when click button', async () => {
    const mockHandler = jest.fn();
    render(<ShowMoreButton buttonClickHandler={mockHandler}/>);

    await userEvent.click(screen.getByRole('button'));
    expect(mockHandler).toBeCalled();
  });
});
