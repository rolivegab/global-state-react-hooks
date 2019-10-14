import React, { memo } from 'react'
import Counter from "components/Counter"
import { useStateLink } from "@hookstate/core"
import GlobalContext from "context"
import Son from 'components/Son'

const Father = () => {
  const { counter, increment } = useStateLink(GlobalContext.grandFather.father.state)

  return <>
    <Counter {...{ increment, counter }} />
    {Math.random()}
    <br/>
    <Son />
  </>
}

export default memo(Father)
