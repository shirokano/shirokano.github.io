import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuBar, { pages } from './MenuBar';

test('renders profile app nav bar with all page buttons', () => {
  render(<MenuBar />);
  for (const page of pages) {
    const pageButton = screen.getByTestId(page);
    expect(pageButton).toBeInTheDocument();
  }
});
