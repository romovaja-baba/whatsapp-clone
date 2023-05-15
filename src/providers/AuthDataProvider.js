import { createContext, useState } from 'react'

export const AuthDataContext = createContext({})

const AuthDataProvider = ({ children }) => {
    const [authData, setAuthData] = useState({})

    return (
        <AuthDataContext.Provider value={{ authData, setAuthData }}>
            {children}
        </AuthDataContext.Provider>
    )
}

export default AuthDataProvider
