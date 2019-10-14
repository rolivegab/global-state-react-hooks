import React from 'react'

interface Props {
  increment: () => void,
  counter: number
}

const Counter: React.FC<Props> = ({ increment, counter }) => {
  return <>
    {counter}{' '}
    <button onClick={increment}>increment</button>
  </>
}

export default Counter
