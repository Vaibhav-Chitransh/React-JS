import React, { useState } from 'react'

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log('Click Handled');
    setCount(() => count + 1);
  }

  return (
    <>
        <h1>{count}</h1>
        <button onClick={() => handleClick()}>Increment</button>
    </>
  )
}

export default Parent
