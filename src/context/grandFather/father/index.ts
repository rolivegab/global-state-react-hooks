import React from 'react'
import useSon from './son'

const useFather = () => {
    const [value, setValue] = React.useState(0)
    const son = useSon()
    const increment = React.useCallback(() => setValue(value + 1), [value])

    return {
        value,
        increment,
        son
    }
}

export default useFather