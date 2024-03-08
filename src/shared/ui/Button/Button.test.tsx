import { render, screen } from '@testing-library/react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';

describe('test Button component', () => {
  test('Test render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('Test render', () => {
    render(<Button variant={ButtonVariant.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass(ButtonVariant.CLEAR);
  });
});
