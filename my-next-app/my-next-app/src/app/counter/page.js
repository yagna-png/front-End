"use client";
import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className={styles.counter}>
      <h1>Counter</h1>
      <p>Current Count: {count}</p>
      <button className={styles.counterButton} onClick={increment}>
        Increment
      </button>
      <button className={styles.counterButton} onClick={decrement}>
        Decrement
      </button>
      {count > 10 && <p>Wow, you're really clicking!</p>}
    </div>
  );
}