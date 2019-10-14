import father from './father'
import {createStateLink} from '@hookstate/core'

const state = createStateLink(0, s => ({
  counter: s.get(),
  increment: () => s.set(p => p + 1)
}));

export default {
  state,
  father
}
