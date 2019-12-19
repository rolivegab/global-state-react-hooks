import { useCallback, useState } from 'react'
import constate from 'constate'

const [SonProvider, useValue, useIncrement] = constate(
  () => {
    const [value, setValue] = useState(0)
    const increment = useCallback(() => setValue(p => p + 1), [])

    return {value, increment}
  },
  p => p.value,
  p => p.increment
)

export default {
  SonProvider,
  useValue,
  useIncrement
}
