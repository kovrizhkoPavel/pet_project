import {FC, useState} from 'react';
import classes from './Counter.module.scss';

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={classes.button}>
      <button onClick={() => setCount(count + 1)}>click</button>
      <p>{count}</p>
    </div>
  );
};

export default Counter;
