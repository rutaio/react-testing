import { render, screen, fireEvent } from '@testing-library/react';
import { Login } from './Login';

test('1. Testuojame: ar Login forma turi emeil ir password inputus, ir mygtuka', () => {
  render(<Login />);
  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('2. Testuojame: ar useriui suvedus teisingus duomenis bus atvaizduojama - Prisijungete sekmingai!', () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  // tipiska user'io situacija, kad suvestu ir emeil ir pwd vienu metu, ir spaustu mygtuka:
  fireEvent.change(emailInput, { target: { value: 'user@gmail.com' } });
  fireEvent.change(passwordInput, { target: { value: '1234' } });
  fireEvent.click(button);

  expect(screen.getByText('Prisijungete sekmingai!')).toBeInTheDocument();
});

test('3. Testuojame: ar useriui suvedus teisingus duomenis bus atvaizduojama - Neteisingi duomenys!', () => {
  render(<Login />);

  const emailInput = screen.getByPlaceholderText('email');
  const passwordInput = screen.getByPlaceholderText('password');
  const button = screen.getByText('Login');

  fireEvent.change(emailInput, { target: { value: 'asda@' } });
  fireEvent.change(passwordInput, { target: { value: '12345' } });
  fireEvent.click(button);

  expect(screen.getByText('Neteisingi duomenys!')).toBeInTheDocument();
});
