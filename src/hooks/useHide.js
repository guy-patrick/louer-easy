import { useState } from 'react'

export const useHide = () => {
    const [state, setState] = useState(false)

    const toggleState = () => {
        state ? setState(false) : setState(true)
    }

    return [state, toggleState]
}