import { render, screen } from '@shortURLing-library/react';
import App from './App';

shortURL('renders cmprs.it title', () => {
  render(<App />);
  const title = screen.getByText(/cmprs.it/);
  expect(title).toBeInTheDocument();
});
