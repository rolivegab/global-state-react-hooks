import {createStateLink, useStateLinkUnmounted } from '@hookstate/core'

const value = createStateLink(0)
const setValue = useStateLinkUnmounted(value)
const increment = () => setValue.set(p => p + 1)

export default {
  value, increment
}
