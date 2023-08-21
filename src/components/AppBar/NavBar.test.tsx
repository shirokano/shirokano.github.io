import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar, { pages } from './NavBar';

test('renders profile app nav bar with all page buttons', () => {
  render(<NavBar />);
  for (const page of pages) {
    const pageButton = screen.getByTestId(page);
    expect(pageButton).toBeInTheDocument();
  }
});
