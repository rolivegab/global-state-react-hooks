import React from 'react'

const useSon = () => {
    const [value, setValue] = React.useState(0)
    const increment = React.useCallback(() => setValue(value + 1), [value])

    return {
        value,
        increment
    }
}

export default useSon