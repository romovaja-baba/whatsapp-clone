import { useContext } from 'react'
import { AppStateContext } from '../../providers/AppStateProvider'
import User from './User'
import UsersInput from './UsersInput'
import '../../styles/Users.css'

const UsersList = ({ onUserSelect }) => {
    const users = useContext(AppStateContext).getAllChats()
    const setChat = useContext(AppStateContext).setChat

    const onPhoneSubmit = (phoneNumber) => {
        setChat({ phoneNumber: phoneNumber })
    }

    return (
        <div className='users-list-area'>
            <UsersInput onPhoneSubmit={onPhoneSubmit} />
            <div className='users-container'>
                {users.map((user, index) => (
                    <User user={user} key={index} onUserSelect={onUserSelect} />
                ))}
            </div>
        </div>
    )
}

export default UsersList
