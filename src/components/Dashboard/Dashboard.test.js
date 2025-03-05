import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('Tikriname ar Dashboard atvaizduoja h1', () => {
  render(<Dashboard />);
  const title = screen.getByRole('heading', { level: 1 });
  expect(title).toBeInTheDocument();
});

test('Tikriname ar Dashboard atvaizduoja mygtuka', () => {
  render(<Dashboard />);
  const button = screen.getByTestId('button');
  expect(button).toBeInTheDocument();
});

test('Tikriname ar Dashboard atvaizduoja inputa', () => {
  render(<Dashboard />);
  const input = screen.getByPlaceholderText('Enter your email');
  expect(input).toBeInTheDocument();
});
