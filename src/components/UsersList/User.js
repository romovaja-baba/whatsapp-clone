import basicImg from '../../images/basic-picture.jpeg'

const User = ({ user, onUserSelect }) => {
    return (
        <div className='user-container' onClick={() => onUserSelect(user)}>
            <img src={basicImg} width={'49px'} height={'49px'} alt='' />
            <div>{user.phoneNumber}</div>
        </div>
    )
}

export default User
