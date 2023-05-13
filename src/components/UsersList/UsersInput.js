const UsersInput = ({onPhoneSubmit}) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            onPhoneSubmit(event.target.value)
        }
    }

    return (
        <div className='users-input'>
            <input placeholder='Введите номер телефона пользователя' onKeyDown={handleKeyDown} />
        </div>
    )
}

export default UsersInput
