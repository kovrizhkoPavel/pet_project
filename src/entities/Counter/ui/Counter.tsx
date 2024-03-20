import { FC } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const onIncrementClick = () => {
    dispatch(counterActions.increment());
  };

  const onDecrementClick = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter">{counterValue}</h1>
      <Button
        data-testid="button-increment"
        variant={ButtonVariant.FILL}
        onClick={onIncrementClick}
      >
        +
      </Button>
      <Button
        data-testid="button-decrement"
        variant={ButtonVariant.FILL}
        onClick={onDecrementClick}
      >
        -
      </Button>
    </div>
  );
};
