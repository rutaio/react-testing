import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

test('Counter.jsx padidina ir pamazina skaicius', () => {
  render(<Counter />);
  const padidintiButton = screen.getByTestId('padidinti-button');
  const pamazintiButton = screen.getByTestId('pamazinti-button');
  const skaiciusParagrafe = screen.getByText('0');

  // Pasakom, ka jam reikia paspausti, siuo atveju padidintiButton:
  fireEvent.click(padidintiButton);
  expect(skaiciusParagrafe).toHaveTextContent('1');

  fireEvent.click(pamazintiButton);
  expect(skaiciusParagrafe).toHaveTextContent('0');
});
