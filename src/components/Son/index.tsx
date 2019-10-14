import React, { memo } from 'react'
import { useStateLink } from "@hookstate/core"
import GlobalContext from "context"
import Counter from 'components/Counter'

const Son = () => {
  const counter = useStateLink(GlobalContext.grandFather.father.son.value).value
  const increment = GlobalContext.grandFather.father.son.increment

  return <>
    <Counter {...{ increment, counter }} />
    {Math.random()}
  </>
}

export default memo(Son)
