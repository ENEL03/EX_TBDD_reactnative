import React, { useState } from 'react';

function Ex1() {
  const initialArr = [6, 7, 8];
  const [count, setCount] = useState(initialArr);

  const handleClick = () => {
    const arr = count.map(length => length + 1);
    setCount(arr);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}

export default Ex1;

