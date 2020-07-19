import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('about page link mounted', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/about/i);
  expect(linkElement).toBeInTheDocument();
});
test('home page link mounted', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/);
  expect(linkElement).toBeInTheDocument();
});
