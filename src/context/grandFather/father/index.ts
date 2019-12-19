import son from './son'
import { useCallback, useState } from 'react'
import constate from 'constate'

const [FatherProvider, useValue, useIncrement] = constate(
  () => {
    const [value, setValue] = useState(0)
    const increment = useCallback(() => setValue(p => p + 1), [])

    return {value, increment, son}
  },
  p => p.value,
  p => p.increment
)

export default {
  FatherProvider,
  useValue,
  useIncrement,
  son
}
