import './styles/App.css'
import ChatWindow from './components/Chat/ChatWindow'
import Header from './components/Header'
import UsersList from './components/UsersList/UsersList'
import { useState } from 'react'

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null)

    const onUserSelect = (user) => {
        setSelectedUser(user)
    }

    return (
        <div className='app-container'>
            <Header />
            <div className='app-content'>
                <div className='app-chat'>
                    <UsersList onUserSelect={onUserSelect} />
                    <ChatWindow selectedUser={selectedUser} />
                </div>
            </div>
        </div>
    )
}

export default App
