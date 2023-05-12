import './App.css'
import ChatWindow from './components/ChatWindow'
import Header from './components/Header'
import UsersList from './components/UsersList'

const App = () => {
    return (
        <>
            <div className='app-header'>
                <Header />
            </div>
            <div className='app-container'>
                <UsersList />
                <ChatWindow />
            </div>
        </>
    )
}

export default App
