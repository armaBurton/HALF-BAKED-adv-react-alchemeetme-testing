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

    // screen.getByRole('backgroundColor', { backgroundColor: '#eee' });

    screen.getByAltText(/alchemy logo/i);

    // screen.getByText(/vonta/i);
    return waitFor(() => { 
      const profile = screen.getByText(/vonta/i);
      expect(profile.textContent).toBe('Vonta');
    });

  })
})


