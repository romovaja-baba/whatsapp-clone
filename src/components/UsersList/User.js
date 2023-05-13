import basicImg from '../../images/basic-picture.jpeg'

const User = ({ user, onUserSelect }) => {
    return (
        <div className='user-container'>
            <img src={basicImg} width={'49px'} height={'49px'} alt='' />
            <div onClick={() => onUserSelect(user)}>{user.phoneNumber}</div>
        </div>
    )
}

export default User
