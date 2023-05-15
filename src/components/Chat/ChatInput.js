import { useForm } from 'react-hook-form'

const ChatInput = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        clearErrors,
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        clearErrors('message')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {errors?.message && <div className='input-error'>Пустое сообщение</div>}
            <div className='chat-messages-input text-input'>
                <input
                    placeholder='Введите сообщение...'
                    {...register('message', { required: true })}
                />
                <button type='submit'>Отправить</button>
            </div>
        </form>
    )
}

export default ChatInput
