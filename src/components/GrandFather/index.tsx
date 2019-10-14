import React, { memo } from 'react'
import { useStateLink } from '@hookstate/core'
import GlobalContext from 'context'
import Counter from 'components/Counter'
import Father from 'components/Father'

const GrandFather = () => {
  const { counter, increment } = useStateLink(GlobalContext.grandFather.state)

  return <>
    <Counter {...{ counter, increment }} />
    {Math.random()}
    <br/>
    <Father />
  </>
}

export default memo(GrandFather)
