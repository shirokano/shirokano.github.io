import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileTopAppBar, { pages } from './ProfileNavBar';

test('renders profile app nav bar with all page buttons', () => {
  render(<ProfileTopAppBar />);
  for (const page of pages) {
    const pageButton = screen.getByTestId(page);
    expect(pageButton).toBeInTheDocument();
  }
});
