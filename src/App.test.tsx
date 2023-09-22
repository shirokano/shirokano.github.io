import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/common/Page.tsx', () => () => {
  return <div data-testid="page" />;
});

test('renders learn react link', () => {
  render(<App />);
  const menuId = screen.getByTestId('main');
  expect(menuId).toBeInTheDocument();
});
