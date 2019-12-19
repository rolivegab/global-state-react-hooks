import React, { memo } from 'react'
import Counter from "components/Counter"
import GlobalContext from "context"
import Son from 'components/Son'

const {
  grandFather: {
    father: {
      useValue,
      useIncrement,
      son: {
        SonProvider
      }
    }
  }
} = GlobalContext

const Father = () => {
  const increment = useIncrement()
  const counter = useValue()
  
  return <>
    <Counter {...{ increment, counter }} />
    {Math.random()}
    <br/>
    <SonProvider>
      <Son />
    </SonProvider>
  </>
}

export default memo(Father)
