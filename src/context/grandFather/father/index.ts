import son from './son'
import {createStateLink} from '@hookstate/core'

const state = createStateLink(0, s => ({
  counter: s.value,
  increment: () => s.set(p => p + 1)
}))

export default {
  state,
  son
}
