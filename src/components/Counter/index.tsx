import React from 'react'
import { Container } from './style'

interface Props {
    increment: () => void,
    value: number
}

const Counter: React.FC<Props> = ({increment, value, children}) => {
    return <>
        {value}{' '}
        <button onClick={increment}>increment</button>
        <Container>{children}</Container>
    </>
}

export default Counter