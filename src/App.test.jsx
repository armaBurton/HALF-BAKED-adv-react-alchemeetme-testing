import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import App from './App';


describe('App', () => {
  it('should render the header', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    // screen.getByRole('backgroundColor', { name: '--var-grey' });

    screen.getByAltText(/alchemy logo/i);

    // screen.getByText(/vonta/i);
    // return waitFor(() => { 
      const profile = await screen.findByText(/vonta/i);
      expect(profile.previousSibling.textContent).toEqual('Meet ');
    // });

  })
})


