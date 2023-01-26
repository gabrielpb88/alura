import { render, screen } from '@testing-library/react';
import Menu from './index';
import { MemoryRouter } from 'react-router-dom';

describe('Menu Component', () => {
  test('Should be in the document', () => {
    render(<Menu />, { wrapper: MemoryRouter });
    const menu = screen.getByRole('navigation');
    expect(menu).toBeInTheDocument();
  });
});
