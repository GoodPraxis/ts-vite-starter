import React from 'react';
import { render, screen } from '@testing-library/react';

import { createSimpleWrapper } from '../wrapper';

describe('createSimpleWrapper', () => {
  it('should render', () => {
    const Wrapper = createSimpleWrapper('wrapper');
    const { container } = render(<Wrapper>hello</Wrapper>);
    expect(container).toHaveTextContent('hello');
  });

  it('should render with className', () => {
    const Wrapper = createSimpleWrapper('wrapper');
    render(<Wrapper>hello</Wrapper>);
    expect(screen.getByText('hello')).toHaveClass('wrapper');
  });

  it('should render with multiple classNames', () => {
    const Wrapper = createSimpleWrapper('lorem ipsum');
    render(<Wrapper>hello</Wrapper>);
    const element = screen.getByText('hello');
    expect(element).toHaveClass('lorem');
    expect(element).toHaveClass('ipsum');
  });
});
