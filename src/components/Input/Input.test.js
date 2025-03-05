import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

test('Input.jsx parodo ivesta reiksme', () => {
  render(<Input placeholder={'testavimo placeholder'} />);
  // Traukiu input pagal jo placeholder reiksme:
  const input = screen.getByPlaceholderText('testavimo placeholder');
  // Tikrinu ar input suvestas tekstas atitinka mano ivedama teksta:
  fireEvent.change(input, { target: { value: 'Hello world!' } });
  // Tikrinu, ar atitinka reiksme:
  expect(input.value).toBe('Hello world!');
});
