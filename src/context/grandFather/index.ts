import React from 'react'
import useFather from './father'

const useGrandFather = () => {
    const [value, setValue] = React.useState(0)
    const father = useFather()
    const increment = React.useCallback(() => setValue(value + 1), [value])

    return {
        value,
        increment,
        father
    }
}

export default useGrandFather