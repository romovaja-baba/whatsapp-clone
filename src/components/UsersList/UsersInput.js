const UsersInput = ({ onPhoneSubmit }) => {
    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            onPhoneSubmit(event.target.value)
        }
    }

    return (
        <div className='users-input text-input'>
            <input placeholder='Введите номер телефона пользователя' onKeyDown={handleKeyDown} />
            <button>Добавить</button>
        </div>
    )
}

export default UsersInput
