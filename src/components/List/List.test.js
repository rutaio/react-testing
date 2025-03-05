import { render, screen } from '@testing-library/react';
import { List } from './List';

test('Tikriname ar atvaizduoja darzoves', () => {
  // (kas yra testineje aplinkoje ir kas yra LIVE nera susije)
  const items = ['obuolys', 'kriause', 'ananasas'];
  render(<List items={items} />);

  // tikriname ar paduotas masyvas atvaizduoja listo elementus (kurie ateina is tevinio elemento kaip propsai) kaip stringus su teisingais tag'ais:
  items.forEach((item) => {
    const listItem = screen.getByText(item);
    expect(listItem).toBeInTheDocument();
    // patikrinam ar tikrai <li></li> elemente egzistuoja sis tekstas:
    expect(listItem.tagName).toBe('LI');
  });
});
