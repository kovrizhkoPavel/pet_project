import { FC } from 'react';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';
import { counterActions } from 'entities/Counter';

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
      <h1>{counterValue}</h1>
      <Button variant={ButtonVariant.FILL} onClick={onIncrementClick}>+</Button>
      <Button variant={ButtonVariant.FILL} onClick={onDecrementClick}>-</Button>
    </div>
  );
};
