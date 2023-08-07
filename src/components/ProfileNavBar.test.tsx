import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfileTopAppBar from './ProfileNavBar';

test('renders profile app bar with correct button text', () => {
  render(<ProfileTopAppBar />);
  const navCVButton = screen.getByText(/CV/i);
  const navBlogButton = screen.getByText(/Blog/i);
  const navMeButton = screen.getByText(/Me/i);
  expect(navCVButton).toBeInTheDocument();
  expect(navBlogButton).toBeInTheDocument();
  expect(navMeButton).toBeInTheDocument();
});
