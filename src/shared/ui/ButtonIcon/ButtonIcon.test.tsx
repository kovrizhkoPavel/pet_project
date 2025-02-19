import { render, screen } from '@testing-library/react';
import { ButtonIcon } from '@/shared/ui/ButtonIcon/ButtonIcon';
import Icon from '@/shared/assets/icon/home-icon.svg';

const dataTestId = 'testId;';

describe('ButtonIcon', () => {
  test('Should be render', () => {
    render(<ButtonIcon
      onClick={() => ''}
      Icon={Icon}
      label="test"
      dataTestId={dataTestId}
    />);

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument();
  });

  test('Should have text content', () => {
    render(<ButtonIcon
      onClick={() => ''}
      Icon={Icon}
      label="test"
      dataTestId={dataTestId}
    />);

    expect(screen.getByTestId(dataTestId)).toHaveTextContent('test');
  });
});
