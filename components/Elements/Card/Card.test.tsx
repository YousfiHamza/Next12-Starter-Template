import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from './index';
import { CardProps } from './types';

describe('Card component', () => {
  const props: CardProps = {
    href: 'https://example.com',
    title: 'Example',
    content: 'This is an example card',
  };

  const secondaryProps: CardProps = {
    ...props,
    variant: 'secondary',
  };

  it('renders the card with the correct props', () => {
    render(<Card {...props} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', props.href);
    expect(screen.getByRole('heading')).toHaveTextContent(props.title);
    expect(screen.getByText(props.content)).toBeInTheDocument();
  });

  it('renders the card with the secndary attributes', () => {
    render(<Card {...secondaryProps} />);
    expect(screen.getByTestId('card')).toHaveClass('secondary');
  });

  it('renders the correct CSS classes', () => {
    render(<Card {...props} />);
    expect(screen.getByRole('heading')).toHaveClass('title');
    expect(screen.getByText(props.content)).toHaveClass('content');
  });

  it('opens the link in a new tab', () => {
    render(<Card {...props} />);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('matches the snapshot', () => {
    const { asFragment } = render(<Card {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
