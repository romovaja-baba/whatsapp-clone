import User from './User'
import '../../styles/Users.css'
import UsersInput from './UsersInput'
import { useState } from 'react'

const UsersList = ({ onUserSelect }) => {
    const [users, setUsers] = useState([])

    const onPhoneSubmit = (phoneNumber) => {
        setUsers([...users, { phoneNumber: phoneNumber }])
    }

    return (
        <div className='users-list-area'>
            <UsersInput onPhoneSubmit={onPhoneSubmit} />
            <div className='users-container'>
                {users.map((user, index) => (
                    <User
                        user={user}
                        key={index}
                        onUserSelect={onUserSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default UsersList
