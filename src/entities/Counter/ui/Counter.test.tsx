import { renderComponent } from 'shared/lib/tests/renderComponent/renderComponent';
import { expect, screen, userEvent } from '@storybook/test';
import { Counter } from './Counter';

describe('Counter', () => {
  beforeEach(() => {
    renderComponent(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
  });

  test('should render', () => {
    expect(screen.getByTestId('counter')).toBeInTheDocument();
  });
  test('should have content 10', () => {
    expect(screen.getByTestId('counter')).toHaveTextContent('10');
  });
  test('increment', async () => {
    await userEvent.click(screen.getByTestId('button-increment'));
    expect(screen.getByTestId('counter')).toHaveTextContent('11');
  });
  test('decrement', async () => {
    await userEvent.click(screen.getByTestId('button-decrement'));
    expect(screen.getByTestId('counter')).toHaveTextContent('9');
  });
});
