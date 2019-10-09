import {createContext} from 'react'
import useGrandFather from './grandFather'

export const useGlobalState = () => {
    const grandFather = useGrandFather()

    return {
        grandFather
    }
}

const GlobalState = createContext(useGlobalState)

export default GlobalState