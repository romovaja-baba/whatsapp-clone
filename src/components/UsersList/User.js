import { useContext } from 'react'
import { AppStateContext } from '../../providers/AppStateProvider'
import basicImg from '../../images/basic-picture.jpeg'

const User = ({ user, onUserSelect }) => {
    const setChat = useContext(AppStateContext).setChat

    const onUserClick = () => {
        onUserSelect(user)
        setChat(user)
    }

    return (
        <div className='user-container' onClick={onUserClick}>
            <img src={basicImg} width={'49px'} height={'49px'} alt='' />
            <div>{user.phoneNumber}</div>
        </div>
    )
}

export default User
