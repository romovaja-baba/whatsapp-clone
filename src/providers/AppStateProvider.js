import { createContext, useState } from 'react'

export const AppStateContext = createContext({})

const AppStateProvider = ({ children }) => {
    const [state, setState] = useState({
        users: [],
        chats: [],
    })

    return (
        <AppStateContext.Provider value={{ state, setState }}>{children}</AppStateContext.Provider>
    )
}

export default AppStateProvider
