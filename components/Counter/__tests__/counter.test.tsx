import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Counter } from '..';

describe('Counter', () => {
  it('should render', () => {
    render(<Counter />);
    expect(screen.getByText('Counter 0')).toBeInTheDocument();
  });

  it('should increment', async () => {
    render(<Counter />);
    const element = screen.getByText('Counter 0');
    await userEvent.click(element);
    expect(element).toHaveTextContent('Counter 1');
    await userEvent.click(element);
    expect(element).toHaveTextContent('Counter 2');
  });
});
