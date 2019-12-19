import constate from "constate";
import { useState, useCallback } from "react";
import father from './father'

const useGrandFather = () => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount(prev => prev + 1), []);
  return { count, increment };
}

const [GrandFatherProvider, useCount, useIncrement] = constate(
  useGrandFather,
  p => p.count,
  p => p.increment
);

export default {
  GrandFatherProvider,
  useCount,
  useIncrement,
  father
}
