import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio without a theme switch even with a saved dark preference', () => {
  window.localStorage.setItem('theme', 'dark');
  render(<App />);
  expect(screen.queryByRole('button', { name: /color theme/i })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { level: 1, name: 'Faizan Faisal' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Open World' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Play live demo' })).toHaveAttribute('href', 'https://open-world-sigma-two.vercel.app/');
  expect(screen.getByRole('button', { name: /Explore my academic lineage/ })).toBeInTheDocument();
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  window.localStorage.removeItem('theme');
});
