import React, { memo } from 'react'
import GlobalContext from "context"
import Counter from 'components/Counter'

const {
  grandFather: {
    father: {
      son: {
        useIncrement,
        useValue
      }
    }
  }
} = GlobalContext

const Son = () => {
  const increment = useIncrement()
  const counter = useValue()

  return <>
    <Counter {...{ increment, counter }} />
    {Math.random()}
  </>
}

export default memo(Son)
