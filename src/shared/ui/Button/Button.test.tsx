import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from './Button';

describe('Button', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test render', () => {
    render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass(ButtonVariant.CLEAR);
  });
});
