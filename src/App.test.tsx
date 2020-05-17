import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders a counter starting at zero', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Checkbox/i);
  expect(linkElement).toBeInTheDocument();
});
