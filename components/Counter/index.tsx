import React, { useState } from 'react';

import './counter.scss';

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button
      className="counter-button"
      type="button"
      onClick={() => setCount(count + 1)}
    >
      Counter
      {' '}
      {count}
    </button>
  );
}
