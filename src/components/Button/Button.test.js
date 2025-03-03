import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

test('Testuojame ar Button.jsx atsivaizduoja ir veikia paspaudimas', () => {
  // jest.fn() - netikra funkcija, kuri fiksuoja mygtuko paspaudima
  const handleClick = jest.fn();

  // render() - atvaizduoja komponenta testavimo aplinkoje
  render(<Button title={'Paspausk mane!'} onClick={handleClick} />);
  // Testuojame ar atvaizduotas tekstas mygtuke sutampa su paduotu tekstu
  // screen.getByText() - gauna elementa pagal teksta is testavimo aplinkos
  const button = screen.getByText('Paspausk mane!');
  // fireEvent.click() - simuliuoja mygtuko paspaudima
  fireEvent.click(button);
  // expect() - tikrina, ar funkcija buvo iskviesta nurodyta kieki kartu
  expect(handleClick).toHaveBeenCalledTimes(1);
});
