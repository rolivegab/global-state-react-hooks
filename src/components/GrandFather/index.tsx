import React from 'react'
import GlobalContext from 'context'
import Counter from 'components/Counter'
import Father from 'components/Father'

const {
  grandFather: {
    useIncrement,
    useCount,
    father: {
      FatherProvider
    }
  }
} = GlobalContext

const GrandFather = () => {
  const counter = useCount()
  const increment = useIncrement()

  return <>
    <Counter {...{ counter, increment }} />
    {Math.random()}
    <br/>
    <FatherProvider>
      <Father />
    </FatherProvider>
  </>
}

export default GrandFather
