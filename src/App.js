import './styles/App.css'
import ChatWindow from './components/Chat/ChatWindow'
import Header from './components/Header'
import UsersList from './components/UsersList/UsersList'
import { useState } from 'react'
import AppStateProvider from './providers/AppStateProvider'
import AuthDataProvider from './providers/AuthDataProvider'
import AuthCheck from './components/Login'

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null)

    const onUserSelect = (user) => {
        setSelectedUser(user)
    }

    return (
        <AppStateProvider>
            <AuthDataProvider>
                <div className='app-container'>
                    <Header />
                    <div className='app-content'>
                        <AuthCheck>
                            <div className='app-chat'>
                                <UsersList onUserSelect={onUserSelect} />
                                <ChatWindow selectedUser={selectedUser} />
                            </div>
                        </AuthCheck>
                    </div>
                </div>
            </AuthDataProvider>
        </AppStateProvider>
    )
}

export default App
